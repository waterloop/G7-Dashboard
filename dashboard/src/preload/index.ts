import { contextBridge } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';
import grpc from '@grpc/grpc-js'; // Import the gRPC module

// Custom APIs for renderer
const api = {
  grpc, // Expose the gRPC module
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api); // Expose the custom API
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api; // Add the custom API to the DOM global
}