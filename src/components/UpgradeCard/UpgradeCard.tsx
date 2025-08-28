import "./UpgradeCard.scss";
function UpgradeCard() {
  return (
    <div className="upgrade">
      <div className="upgrade_image" />
      <div className="upgrade_info">
        <div className="upgrade_info_text">
          <h1>Buy more space now!</h1>
          <p>Upgrade to cloud premium</p>
        </div>
        <button className="upgrade_info_button"> Upgrade Account!</button>
      </div>
    </div>
  );
}

export default UpgradeCard;
