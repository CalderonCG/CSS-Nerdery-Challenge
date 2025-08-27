import "./Navbar.scss";
import {
  FaClock,
  FaFile,
  FaHandHolding,
  FaHome,
  FaPlus,
  FaShareAlt,
  FaTrash,
} from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <span className="navbar_nameplate" />
      <div className="navbar_navigation">
        <span className="navbar_navigation_option">
          <FaHome className="navbar_navigation_icon" />
          <p>Home</p>
        </span>
        <span className="navbar_navigation_option">
          <FaFile className="navbar_navigation_icon" />
          <p>My Files</p>
        </span>
        <span className="navbar_navigation_option">
          <FaClock className="navbar_navigation_icon" />
          <p>Recent Files</p>
        </span>
        <span className="navbar_navigation_option">
          <FaShareAlt className="navbar_navigation_icon" />
          <p>Shared Files</p>
        </span>
        <span className="navbar_navigation_option">
          <FaHandHolding className="navbar_navigation_icon" />
          <p>File Request</p>
        </span>
        <span className="navbar_navigation_option">
          <FaTrash className="navbar_navigation_icon" />
          <p>Trash</p>
        </span>
        <hr className="divider" />
      </div>

      <button className="navbar_button">
        <p className="navbar_button_text">Create New</p>
        <span className="navbar_button_span">
          <FaPlus className="navbar_button_icon" />
        </span>
      </button>
    </div>
  );
}

export default Navbar;
