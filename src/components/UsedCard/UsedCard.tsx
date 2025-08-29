import { FaEllipsisH, FaEllipsisV } from "react-icons/fa";
import UsedCircles from "../UsedCircles/UsedCircles";
import "./UserCard.scss";

type UsedCardProps = {
    name: string;
    date: string;
    amount: string[];
    label: boolean
}

function UsedCard({name, date, amount, label}: UsedCardProps) {
  return (
    <div className="used">
        <FaEllipsisV className="used_options_v"/>
        <FaEllipsisH className="used_options_h"/>
      <div className="used_icons">
        <div className="used_icons_squares">
          <div className="used_icons_squares_back" />
          <div className="used_icons_squares_main" />
        </div>
        <UsedCircles amount={amount} label={label}/>
      </div>

      <div className="used_data">
        <h1>{name}</h1>
        <p>Created: {date}</p>
      </div>
    </div>
  );
}

export default UsedCard;
