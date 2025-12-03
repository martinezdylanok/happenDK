import { useEffect, useState } from "react";
import type { Event as EventType } from "@/features/events/components/event-list/data/eventType";
import getEvents from "@/features/events/components/event-list/data/getEvents";

const useLoadEvents = () => {
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

	return { events, isLoading };
};

export default useLoadEvents;
