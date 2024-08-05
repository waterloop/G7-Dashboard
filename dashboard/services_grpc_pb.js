// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_pb = require('./services_pb.js');

function serialize_BMSData(arg) {
  if (!(arg instanceof services_pb.BMSData)) {
    throw new Error('Expected argument of type BMSData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BMSData(buffer_arg) {
  return services_pb.BMSData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BMSDataMessage(arg) {
  if (!(arg instanceof services_pb.BMSDataMessage)) {
    throw new Error('Expected argument of type BMSDataMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BMSDataMessage(buffer_arg) {
  return services_pb.BMSDataMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CatchAllErrorMessage(arg) {
  if (!(arg instanceof services_pb.CatchAllErrorMessage)) {
    throw new Error('Expected argument of type CatchAllErrorMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CatchAllErrorMessage(buffer_arg) {
  return services_pb.CatchAllErrorMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_IMUData(arg) {
  if (!(arg instanceof services_pb.IMUData)) {
    throw new Error('Expected argument of type IMUData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_IMUData(buffer_arg) {
  return services_pb.IMUData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_IMUDataMessage(arg) {
  if (!(arg instanceof services_pb.IMUDataMessage)) {
    throw new Error('Expected argument of type IMUDataMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_IMUDataMessage(buffer_arg) {
  return services_pb.IMUDataMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LIMData(arg) {
  if (!(arg instanceof services_pb.LIMData)) {
    throw new Error('Expected argument of type LIMData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LIMData(buffer_arg) {
  return services_pb.LIMData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LIMDataMessage(arg) {
  if (!(arg instanceof services_pb.LIMDataMessage)) {
    throw new Error('Expected argument of type LIMDataMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LIMDataMessage(buffer_arg) {
  return services_pb.LIMDataMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PressureSensorData(arg) {
  if (!(arg instanceof services_pb.PressureSensorData)) {
    throw new Error('Expected argument of type PressureSensorData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PressureSensorData(buffer_arg) {
  return services_pb.PressureSensorData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PressureSensorDataMessage(arg) {
  if (!(arg instanceof services_pb.PressureSensorDataMessage)) {
    throw new Error('Expected argument of type PressureSensorDataMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PressureSensorDataMessage(buffer_arg) {
  return services_pb.PressureSensorDataMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_StatusUpdateDataMessage(arg) {
  if (!(arg instanceof services_pb.StatusUpdateDataMessage)) {
    throw new Error('Expected argument of type StatusUpdateDataMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StatusUpdateDataMessage(buffer_arg) {
  return services_pb.StatusUpdateDataMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var DataReceiverService = exports.DataReceiverService = {
  receiveBMSData: {
    path: '/DataReceiver/ReceiveBMSData',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.BMSData,
    responseType: services_pb.BMSDataMessage,
    requestSerialize: serialize_BMSData,
    requestDeserialize: deserialize_BMSData,
    responseSerialize: serialize_BMSDataMessage,
    responseDeserialize: deserialize_BMSDataMessage,
  },
  receiveLIMData: {
    path: '/DataReceiver/ReceiveLIMData',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.LIMData,
    responseType: services_pb.LIMDataMessage,
    requestSerialize: serialize_LIMData,
    requestDeserialize: deserialize_LIMData,
    responseSerialize: serialize_LIMDataMessage,
    responseDeserialize: deserialize_LIMDataMessage,
  },
  receiveIMUData: {
    path: '/DataReceiver/ReceiveIMUData',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.IMUData,
    responseType: services_pb.IMUDataMessage,
    requestSerialize: serialize_IMUData,
    requestDeserialize: deserialize_IMUData,
    responseSerialize: serialize_IMUDataMessage,
    responseDeserialize: deserialize_IMUDataMessage,
  },
  receivePressureSensorData: {
    path: '/DataReceiver/ReceivePressureSensorData',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.PressureSensorData,
    responseType: services_pb.PressureSensorDataMessage,
    requestSerialize: serialize_PressureSensorData,
    requestDeserialize: deserialize_PressureSensorData,
    responseSerialize: serialize_PressureSensorDataMessage,
    responseDeserialize: deserialize_PressureSensorDataMessage,
  },
  receiveStatusUpdate: {
    path: '/DataReceiver/ReceiveStatusUpdate',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.StatusUpdateDataMessage,
    responseType: services_pb.StatusUpdateDataMessage,
    requestSerialize: serialize_StatusUpdateDataMessage,
    requestDeserialize: deserialize_StatusUpdateDataMessage,
    responseSerialize: serialize_StatusUpdateDataMessage,
    responseDeserialize: deserialize_StatusUpdateDataMessage,
  },
  receiveCatchAllError: {
    path: '/DataReceiver/ReceiveCatchAllError',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.CatchAllErrorMessage,
    responseType: services_pb.CatchAllErrorMessage,
    requestSerialize: serialize_CatchAllErrorMessage,
    requestDeserialize: deserialize_CatchAllErrorMessage,
    responseSerialize: serialize_CatchAllErrorMessage,
    responseDeserialize: deserialize_CatchAllErrorMessage,
  },
};

exports.DataReceiverClient = grpc.makeGenericClientConstructor(DataReceiverService);
