import type { Event as EventType } from "../../data/eventType";
import EventCard from "./components/event-card/EventCard";

interface EventProps {
	event: EventType;
}

const Event = ({ event }: EventProps) => {
	return <EventCard event={event} />;
};

export default Event;
