const AboutSections = () => {
	return (
		<div className="about-sections">
			<div className="about-sections__wrapper grid grid-cols-1 gap-6 md:grid-cols-2">
				<div className="about-sections__item">
					<h2 className="mb-3 text-2xl font-semibold text-heading">
						Finding Something to Do
					</h2>
					<p className="mb-4 leading-relaxed text-body">
						happenDK pulls in events from everywhere and creates a personalized
						feed so you can quickly find what to do. You chill and we do the
						work:
					</p>
					<ul className="list-inside list-disc space-y-2 text-body">
						<li>Get the events from multiple sources</li>
						<li>Prune the raw data</li>
						<li>Display only what is relevant to you</li>
						<li>Provide a fast and minimal interface</li>
					</ul>
				</div>
				<div className="about-sections__item">
					<h2 className="mb-3 text-2xl font-semibold text-heading">
						Future Plans
					</h2>
					<p className="leading-relaxed text-body">
						We are constantly working on expanding our coverage to include
						events throughout Denmark. Our goal is to become the go-to platform
						for discovering events across the entire country.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutSections;
