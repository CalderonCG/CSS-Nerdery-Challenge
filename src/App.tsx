import Navbar from "./components/Navbar/Navbar"
import './App.scss'
import Recent from "./components/Recent/Recent"
import Storage from "./components/Storage/Storage"


function App() {

  return (
    <div className="app_container">
      <Navbar/>
      <Recent/>
      <Storage/>
    </div>
  )
}

export default App
