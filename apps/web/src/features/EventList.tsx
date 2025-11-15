import { useEffect, useState } from "react";
import Event from "./Event";
import type { Event as EventType } from "./eventType";
import getEvents from "./getEvents";

const EventList = () => {
	const [events, setEvents] = useState<EventType[] | null>(null);

	useEffect(() => {
		const loadEvents = async () => {
			try {
				const response = await getEvents();
				setEvents(response?.events || []);
			} catch (error) {
				console.error("Error:", (error as Error).message);
			}
		};

		loadEvents();
	}, []);

	return (
		<>
			{events?.map((event, index) => {
				return <Event key={event.id || index} event={event} />;
			})}
		</>
	);
};

export default EventList;
