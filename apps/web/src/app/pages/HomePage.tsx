import Layout from "@/components/Layout";
import EventList from "@/features/events/components/event-list/EventList";
import HomeHero from "@/features/homepage/components/home-hero/HomeHero";

const HomePage = () => {
	return (
		<Layout>
			<section className="home-page container mx-auto px-6 py-12">
				<HomeHero />
				<EventList />
			</section>
		</Layout>
	);
};

export default HomePage;
