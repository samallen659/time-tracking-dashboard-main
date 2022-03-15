import DetailCard from "./components/DetailCard";
import ProfileCard from "./components/ProfileCard";
import "./styles/scss/styles.scss";

const activityData = require("./data.json");

const App = () => {
	return (
		<>
			<main>
				<ProfileCard />
				{activityData.map((activity) => {
					return <DetailCard {...activity} />;
				})}
			</main>
		</>
	);
};

export default App;
