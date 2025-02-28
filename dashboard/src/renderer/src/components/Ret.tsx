//import * as grpc from '@grpc/grpc-js';
//import {DataReceiverClient } from '../../../../services_grpc_pb.js';
//import { BMSData, BMSDataMessage, IMUData, IMUDataMessage } from "../../../../services_pb";

const grpc = require("@grpc/grpc-js");
const {DataReceiverClient} = require('../../../../services_grpc_pb.js')
const { BMSData, BMSDataMessage, IMUData, IMUDataMessage } = require('../../../../services_pb');

// ... (Inside your component)
const client = new DataReceiverClient(
  'localhost:50051', // Replace with your Raspberry Pi's IP and port
  grpc.credentials.createInsecure() // Use secure credentials in production
);

export const fetchBMSData = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    const request = new BMSData();
    client.recieveBMS(request, (err, response) => {
      if (err) {
        console.error("grpc (BMSData):", err);
        reject(err);
      }
      else {
        resolve(response)
      }
    });
  });
};

export const fetchIMUData = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    const request = new IMUData();
    client.receiveIMUData(request, (err, response) => {
      if (err) {
        console.error("grpc error (IMUData):", err);
        reject(err);
      }
      else {
        resolve(response);
      }
    });
  });
};
