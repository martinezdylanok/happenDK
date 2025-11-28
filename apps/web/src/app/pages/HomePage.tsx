import Layout from "@/components/Layout";
import HomeHero from "@/features/home-hero/HomeHero";
import EventList from "../../features/event-list/EventList";

const HomePage = () => {
	return (
		<Layout>
			<div className="home-page container mx-auto px-6 py-12">
				<HomeHero />
				<EventList />
			</div>
		</Layout>
	);
};

export default HomePage;
