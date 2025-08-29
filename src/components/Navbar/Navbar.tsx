import clsx from "clsx";
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

type NavbarProps = {
  show: boolean;
};

function Navbar({ show }: NavbarProps) {
  return (
    <div
      className={clsx("navbar", {
        navbar_display: show,
      })}
    >
      <div className="navbar_header">
        <div className="navbar_header_nameplate" />
      </div>
      <div className="navbar_navigation">
        <span className="navbar_navigation_option">
          <div className="navbar_navigation_option_border" />
          <FaHome className="navbar_navigation_icon" />
          <p>Home</p>
        </span>
        <span className="navbar_navigation_option">
          <div className="navbar_navigation_option_border" />
          <FaFile className="navbar_navigation_icon" />
          <p>My Files</p>
        </span>
        <span className="navbar_navigation_option">
          <div className="navbar_navigation_option_border" />

          <FaClock className="navbar_navigation_icon" />
          <p>Recent Files</p>
        </span>
        <span className="navbar_navigation_option">
          <div className="navbar_navigation_option_border" />
          <FaShareAlt className="navbar_navigation_icon" />
          <p>Shared Files</p>
        </span>
        <span className="navbar_navigation_option">
          <div className="navbar_navigation_option_border" />
          <FaHandHolding className="navbar_navigation_icon" />
          <p>File Request</p>
        </span>
        <span className="navbar_navigation_option">
          <div className="navbar_navigation_option_border" />
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
