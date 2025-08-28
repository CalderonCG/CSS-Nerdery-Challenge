import "./UsedCircles.scss";

function UsedCircles({ amount }: { amount: number }) {
  return (
    <div className="used_icons_circles">
      <div className="used_icons_circles_circle" />
      <div className="used_icons_circles_circle" />
      {amount >= 3 && 
      <div className="used_icons_circles_circle" >
        <p>+3</p>
      </div>}
    </div>
  );
}

export default UsedCircles;
