import { FaCog, FaRegUserCircle, FaSignOutAlt } from "react-icons/fa";
import "./Storage.scss";
import Chart from "../Chart/Chart";
import FileTypeCard from "../FileTypeCard/FileTypeCard";
import UpgradeCard from "../UpgradeCard/UpgradeCard";

export type DataType = {
  name: string;
  value: number;
};

const data: DataType[] = [
  { name: "Documents", value: 200 },
  { name: "Videos", value: 125  },
  { name: "Pictures", value: 75  },
  { name: "Available", value: 50  },
];

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
          <Chart data={data} />
          <p className="storage_container_chart_label">
            420.2 GB of 500 GB used
          </p>
        </div >

        <div className="storage_container_list">
          {data.map((file, index) => (
            <FileTypeCard key={file.name} data={file} border={data.length === (index+1)}  />
          ))}
        </div>

        <UpgradeCard/>
      </div>
    </div>
  );
}

export default Storage;
