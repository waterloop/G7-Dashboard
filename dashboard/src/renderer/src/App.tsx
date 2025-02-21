import './App.css'
import Versions from './components/Versions'
import Box from './components/Box'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
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