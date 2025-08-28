import UsedCircles from "../UsedCircles/UsedCircles";
import "./UserCard.scss";

type UsedCardProps = {
    name: string;
    date: string;
    amount: number;
}

function UsedCard({name, date, amount}: UsedCardProps) {
  return (
    <div className="used">
      <div className="used_icons">
        <div className="used_icons_squares">
          <div className="used_icons_squares_back" />
          <div className="used_icons_squares_main" />
        </div>
        <UsedCircles amount={amount}/>
      </div>

      <div className="used_data">
        <h1>{name}</h1>
        <p>Created: {date}</p>
      </div>
    </div>
  );
}

export default UsedCard;
