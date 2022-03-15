import DetailCard from "./components/DetailCard";
import ProfileCard from "./components/ProfileCard";
import "./styles/scss/styles.scss";

const activityData = require("./data.json");

const App = () => {
	return (
		<>
			<main>
				<ProfileCard />
				{activityData.map((activity, i) => {
					return <DetailCard key={i} class={`detail-card-${i + 1}`} {...activity} />;
				})}
			</main>
		</>
	);
};

export default App;
