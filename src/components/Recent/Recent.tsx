import { FaClock } from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";
import "./Recent.scss";
import UsedCard from "../UsedCard/UsedCard";
import SharedCard from "../SharedCard/SharedCard";
function Recent() {
  return (
    <div className="recent">
      <SearchBar />
      <div className="recent_header">
        <h1>Recently Used</h1>
        <div className="recent_header_icons">
          <FaClock />
          <FaClock className="recent_header_icon" />
        </div>
      </div>

      <div className="recent_used">
        <UsedCard name="App Project" date="20.02.2020" amount={['neutral', 'neutral']} label={false} />
        <UsedCard name="Project: fitbit" date="28.02.2020" amount={['neutral', 'neutral']} label={false}/>
        <UsedCard name="Client documents" date="4.03.2020" amount={['neutral', 'neutral', 'neutral']}  label={true}/>
      </div>

      <div className="recent_header">
        <h1>Recent files</h1>
        <p>View All</p>
      </div>

      <div className="recent_header">
        <h1>Share with me</h1>
        <p>View All</p>
      </div>

      <div className="recent_used">
        <SharedCard name="App Project" date="20.02.2020" amount={['green', 'red']} />

        <SharedCard name="App Project" date="20.02.2020" amount={['green', 'red', 'yellow']}  />

        <SharedCard name="App Project" date="20.02.2020" amount={['green', 'yellow']}  />
      </div>
    </div>
  );
}

export default Recent;
