import EventCard from "./EventCard";
import type { Event as EventType } from "./eventType";

interface EventProps {
	event: EventType;
}

const Event = ({ event }: EventProps) => {
	return <EventCard event={event} />;
};

export default Event;
