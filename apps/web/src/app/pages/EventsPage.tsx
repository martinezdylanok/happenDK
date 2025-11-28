import Layout from "@/components/Layout";
import EventsHeader from "@/features/events-header/EventsHeader";
import EventList from "../../features/event-list/EventList";

const EventsPage = () => {
	return (
		<Layout>
			<div className="events-page container mx-auto px-6 py-12">
				<EventsHeader></EventsHeader>
				<EventList />
			</div>
		</Layout>
	);
};

export default EventsPage;
