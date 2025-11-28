import { useEffect, useState } from "react";
import Event from "./components/event/Event";
import type { Event as EventType } from "./data/eventType";
import getEvents from "./data/getEvents";

const EventList = () => {
	const [events, setEvents] = useState<EventType[] | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadEvents = async () => {
			try {
				setIsLoading(true);
				const response = await getEvents();
				setEvents(response?.events || []);
			} catch (error) {
				console.error("Error:", (error as Error).message);
			} finally {
				setIsLoading(false);
			}
		};

		loadEvents();
	}, []);

	if (isLoading) {
		return (
			<div className="event-list__loading flex items-center justify-center py-20">
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
