import * as grpc from '@grpc/grpc-js';
import * as dataReceiverProto from '../../../../services_grpc_pb.js';

// ... (Inside your component)
const client = new dataReceiverProto.DataReceiverClient(
  'raspberrypi-ip-address:50051', // Replace with your Raspberry Pi's IP and port
  grpc.credentials.createInsecure() // Use secure credentials in production
);

const bmsData = new dataReceiverProto.BMSData();
// ... (Set the values of bmsData)

client.receiveBMSData(bmsData, (err, response) => {
  if (err) {
    console.error('Error sending BMS data:', err);
  } else {
    console.log('BMS data sent successfully:', response);
  }
});
