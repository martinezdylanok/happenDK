import Layout from "@/components/Layout";
import EventList from "@/features/events/components/event-list/EventList";
import EventsHero from "@/features/events/components/events-hero/EventsHero";

const EventsPage = () => {
	return (
		<Layout>
			<section className="events-page container mx-auto px-6 py-12">
				<EventsHero />
				<EventList />
			</section>
		</Layout>
	);
};

export default EventsPage;
