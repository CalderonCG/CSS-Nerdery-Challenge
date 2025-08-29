
import UsedCircles from "../UsedCircles/UsedCircles";
import "./SharedCard.scss";

type SharedCardProps = {
    name: string;
    date: string;
    amount: string[];
}

function SharedCard({name, date, amount}: SharedCardProps) {
  return (
    <div className="shared">
      <div className="shared_icons">
          <div className="shared_icons_square" />
        <UsedCircles amount={amount} label={false}/>
      </div>

      <div className="shared_data">
        <h1>{name}</h1>
        <p>Created: {date}</p>
      </div>
    </div>
  );
}

export default SharedCard;
