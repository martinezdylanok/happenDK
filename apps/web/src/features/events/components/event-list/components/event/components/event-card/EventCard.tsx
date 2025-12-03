import type { Event as EventType } from "../../../../data/eventType";

interface EventCardProps {
	event: EventType;
}

const EventCard = ({ event }: EventCardProps) => {
	const formatDate = (dateString: string | null) => {
		if (!dateString) return null;
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	};

	const start = formatDate(event.startDate);
	const end = formatDate(event.endDate);

	const cardContent = (
		<div className="event-card group relative flex h-full flex-col overflow-hidden rounded-lg border border-border-subtle bg-card transition-all duration-200 hover:border-default hover:shadow-sm">
			{event.image && (
				<div className="event-card__image-wrapper relative h-48 w-full overflow-hidden bg-section">
					<img
						className="event-card__image h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
						src={event.image}
						alt={event.title}
					/>
				</div>
			)}
			<div className="event-card__content flex flex-1 flex-col gap-3 p-6">
				{event.title && (
					<h3 className="event-card__title text-xl font-semibold leading-tight text-heading">
						{event.title}
					</h3>
				)}
				{event.description && (
					<p className="event-card__description line-clamp-3 flex-1 text-sm leading-relaxed text-body">
						{event.description}
					</p>
				)}
				<div className="event-card__meta mt-auto flex flex-col gap-2">
					{(start || end) && (
						<p className="event-card__date text-xs text-muted">
							{start && end ? `${start} - ${end}` : start || end}
						</p>
					)}
					{event.url && (
						<span className="event-card__link text-sm font-medium text-accent transition-colors group-hover:text-active">
							View event →
						</span>
					)}
				</div>
			</div>
		</div>
	);

	if (event.url) {
		return (
			<a
				className="event-card__link-wrapper block h-full"
				href={event.url}
				target="_blank"
				rel="noopener noreferrer"
			>
				{cardContent}
			</a>
		);
	}

	return cardContent;
};

export default EventCard;
