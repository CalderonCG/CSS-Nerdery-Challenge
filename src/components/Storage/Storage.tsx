import { FaCog, FaSignOutAlt, FaUser } from "react-icons/fa";
import "./Storage.scss";

function Storage() {
  return (
    <div className="storage">
      <div className="storage_header">
        <div className="storage_header_options">
          <FaSignOutAlt className="storage_header_options_icon" />
          <FaCog className="storage_header_options_icon" />
        </div>

        <span className="storage_header_avatar">
          <p>Name</p>
          <FaUser className="storage_header_avatar_icon" />
        </span>
      </div>
    </div>
  );
}

export default Storage;
