import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import Recent from "./components/Recent/Recent";
import Storage from "./components/Storage/Storage";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { FaBox } from "react-icons/fa";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showStorage, setShowStorage] = useState(false);
  
  const handleClose = () => {
    setShowSidebar(false);
    setShowStorage(false);
  }

  return (
    <div className="app_container">
      <div className="sidebar_controller">
        <MdOutlineMenu onClick={() => setShowSidebar(true)} />
        <FaBox onClick={() => setShowStorage(true)} />

        {(showSidebar || showStorage) && <div className="backdrop" onClick={()=>handleClose()}/>}
      </div>
      <Navbar show={showSidebar} handleClose={setShowSidebar}  />
      <Recent />
      <Storage show={showStorage}  handleClose={setShowStorage} />
    </div>
  );
}

export default App;
