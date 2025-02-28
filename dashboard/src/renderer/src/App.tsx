import './App.css'
import Box from './components/Box'
import { useEffect, useState } from 'react'

import { fetchBMSData, fetchIMUData } from './components/Ret'
import { BMSData, BMSDataMessage, IMUData, IMUDataMessage } from "../../../services_pb";





function App(): JSX.Element {

  const [bmsData, setBmsData] = useState<BMSDataMessage | null>(null);
  const [imuData, setImuData] = useState<IMUDataMessage | null>(null);

  useEffect(() => {
    const updateData = async() => {
      try {
        const bms = await fetchBMSData();
        const imu = await fetchIMUData();
        setBmsData(bms);
        setImuData(imu);
      }
      catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    updateData();
    const interval = setInterval(updateData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>{bmsData}</div>
      <div>{imuData}</div>
      <div className="grid-container">
        {/* This is box number one */}
        <Box title="Box 1" description="Data 1" />
        {/* This is box number two */}
        <Box title="Box 2" description="Data 2" />
        {/* This is box number three */}
        <Box title="Box 3" description="Data 3" />
        {/* This is box number one */}
        <Box title="Box 4" description="Data 4" />
        {/* This is box number one */}
        <Box title="Box 5" description="Data 5" />
        {/* This is box number one */}
        <Box title="Box 6" description="Data 6" />
        {/* This is box number one */}
        <Box title="Box 7" description="Data 7" className="stretched" />
      </div>
    </>
  )
}

export default App