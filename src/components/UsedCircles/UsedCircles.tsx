import clsx from "clsx";
import "./UsedCircles.scss";

function UsedCircles({ amount, label }: { amount: string[], label: boolean }) {
  return (
    <div className="used_icons_circles">
      {amount.map((color, index) => (
        <div key={index} className={clsx("used_icons_circles_circle", 
          {
            red: color === 'red',
            green: color === 'green',
            yellow: color === 'yellow',
          }
        )}>
          {label && index == 2 && 
          <p>+3</p>}
        </div>
      ))}
    </div>
  );
}

export default UsedCircles;
