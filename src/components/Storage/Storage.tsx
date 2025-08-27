import { FaCog, FaRegUserCircle, FaSignOutAlt} from "react-icons/fa";
import "./Storage.scss";
import Chart from "../Chart/Chart";

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
          <FaRegUserCircle className="storage_header_avatar_icon" />
        </span>
      </div>

      <div className="storage_container">
        <h1 className="storage_container_title">Storage</h1>
        <div className="storage_container_chart">
          <Chart />
          <p className="storage_container_chart_label">420.2 GB of 500 GB used</p>
        </div>
      </div>
    </div>
  );
}

export default Storage;
