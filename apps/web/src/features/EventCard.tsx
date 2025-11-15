import type { Event as EventType } from "./eventType";

interface EventCardProps {
	event: EventType;
}

const EventCard = ({ event }: EventCardProps) => {
	const renderImage = () => {
		if (!event.image) return null;

		const image = (
			<img className="event-card__image" src={event.image} alt={event.title} />
		);

		if (event.url) {
			return (
				<a
					className="event-card__image-link"
					href={event.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					{image}
				</a>
			);
		}

		return image;
	};

	const start = event.startDate
		? new Date(event.startDate).toLocaleDateString("en-US", {
				year: "numeric",
				month: "short",
				day: "numeric",
			})
		: null;

	const end = event.endDate
		? new Date(event.endDate).toLocaleDateString("en-US", {
				year: "numeric",
				month: "short",
				day: "numeric",
			})
		: null;

	return (
		<div className="event__event-card">
			{renderImage()}
			{event.title && <span className="event-card__title">{event.title}</span>}
			{event.description && (
				<span className="event-card__description">{event.description}</span>
			)}
			{start && end && (
				<p className="event-card__date">{`Date: ${start} - ${end}`}</p>
			)}
			{event.url && (
				<a
					className="event-card__link"
					href={event.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					View event
				</a>
			)}
		</div>
	);
};

export default EventCard;
