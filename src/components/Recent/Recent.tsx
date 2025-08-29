import { FaClock } from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";
import "./Recent.scss";
import UsedCard from "../UsedCard/UsedCard";
import SharedCard from "../SharedCard/SharedCard";
import RecentCard from "../RecentCard/RecentCard";
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
        <UsedCard
          name="App Project"
          date="20.02.2020"
          amount={["neutral", "neutral"]}
          label={false}
        />
        <UsedCard
          name="Project: fitbit"
          date="28.02.2020"
          amount={["neutral", "neutral"]}
          label={false}
        />
        <UsedCard
          name="Client documents"
          date="4.03.2020"
          amount={["neutral", "neutral", "neutral"]}
          label={true}
        />
      </div>

      <div className="recent_header">
        <h1>Recent files</h1>
        <p>View All</p>
      </div>

      <div className="recent_files">
        <div className="recent_files_header">
          <p>Name</p>
          <p>Members</p>
          <p>Last Modified</p>
        </div>
        <RecentCard name="Travel Landing Page" members={5} date="Mar 8, 2020" color="primary"/>
        <RecentCard name="True Photos" members={12} date="Mar 8, 2020" color="green"/>
        <RecentCard name="Dashboard Structure" members={10} date="Mar 9, 2020" color="red"/>
        <RecentCard name="Character Illustration" members={3} date="Mar 10, 2020" color="primary"/>
      </div>

      <div className="recent_header">
        <h1>Share with me</h1>
        <p>View All</p>
      </div>

      <div className="recent_used">
        <SharedCard
          name="Landing Page"
          date="20.02.2020"
          amount={["green", "red"]}
        />

        <SharedCard
          name="Illustration Pack"
          date="20.02.2020"
          amount={["green", "red", "yellow"]}
        />

        <SharedCard
          name="CV Design"
          date="20.02.2020"
          amount={["green", "yellow"]}
        />
      </div>
    </div>
  );
}

export default Recent;
