import { FaBoxOpen, FaFile, FaImage, FaVideo } from "react-icons/fa";
import "./FileTypeCard.scss";
import type { DataType } from "../Storage/Storage";
import clsx from "clsx";

type FileTypeCardType = {
  data: DataType;
  border: boolean;
};

const IconsMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Documents: FaFile,
  Pictures: FaImage,
  Videos: FaVideo,
  Available: FaBoxOpen,
};

function FileTypeCard({ data, border }: FileTypeCardType) {
  const Icon = IconsMap[data.name] || FaFile;
  return (
    <div className={clsx('file_type',{
        border: !border
    })}>
      <Icon className={clsx('file_type_icon', {
        files: data.name === 'Documents',
        videos: data.name === 'Videos',
        pictures: data.name === 'Pictures',
        available: data.name === 'Available'
      })} />
      <div className="file_type_data">
        <p className="file_type_data_name">{data.name}</p>
        <p className="file_type_data_amount">720 files</p>
      </div>
      <div className="file_type_size">{data.value} GB</div>
    </div>
  );
}

export default FileTypeCard;
