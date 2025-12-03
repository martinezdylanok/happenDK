import { Spinner } from "@/components/ui/spinner";
import useLoadEvents from "@/utils/hooks/useLoadEvents/useLoadEvents";
import Event from "./components/event/Event";

const EventList = () => {
	const { events, isLoading } = useLoadEvents();

	if (isLoading) {
		return (
			<div className="event-list__loading flex gap-2 items-center justify-center py-20">
				<Spinner></Spinner>
				<p className="text-muted">Loading events...</p>
			</div>
		);
	}

	if (!events || events.length === 0) {
		return (
			<div className="event-list__empty flex items-center justify-center py-20">
				<p className="text-muted">No events found.</p>
			</div>
		);
	}

	return (
		<div className="event-list grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{events.map((event, index) => {
				return <Event key={event.id || index} event={event} />;
			})}
		</div>
	);
};

export default EventList;
