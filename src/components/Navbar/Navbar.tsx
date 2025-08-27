import "./Navbar.scss";
import {
  FaClock,
  FaEllipsisH,
  FaFile,
  FaFileUpload,
  FaFolderPlus,
  FaHandHolding,
  FaHome,
  FaPlus,
  FaShareAlt,
  FaTrash,
  FaUpload,
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
      <div className="navbar_wrapper">
        <div className="navbar_wrapper_box">
          <div className="navbar_actions">
            <span className="navbar_actions_action">
              <FaFileUpload className="navbar_navigation_icon" />
              <p>Upload files</p>
            </span>
            <span className="navbar_actions_action">
              <FaUpload className="navbar_navigation_icon" />
              <p>Upload folder</p>
            </span>
            <span className="navbar_actions_action">
              <FaFolderPlus className="navbar_navigation_icon" />
              <p>New folder</p>
            </span>
            <span className="navbar_actions_action">
              <FaEllipsisH className="navbar_navigation_icon" />
              <p>More</p>
            </span>
          </div>
        </div>

        <button className="navbar_button">
          <p className="navbar_button_text">Create New</p>
          <span className="navbar_button_span">
            <FaPlus className="navbar_button_icon" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
