// ... (require generated gRPC code, database connection, etc.)

const dataReceiver = {
    ReceiveBMSData(call, callback) {
      const bmsData = call.request;
      // 1. Validate bmsData
      // 2. Store bmsData in the database (e.g., SQLite, MongoDB)
      // 3. Prepare a BMSDataMessage response (e.g., with an ID or success status)
      callback(null, response); 
    },
    // ... (Implement other RPC methods)
  };
  
  const server = new grpc.Server();
  server.addService(dataReceiverService, dataReceiver);
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });
// run "node server.js" on rasppi  