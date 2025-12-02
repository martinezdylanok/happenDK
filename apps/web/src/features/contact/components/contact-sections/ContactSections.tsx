const ContactSections = () => {
	return (
		<div className="contact-sections">
			<div className="contact-sections__wrapper max-w-2xl space-y-8">
				<div className="contact-sections__item">
					<h2 className="mb-3 text-xl font-semibold text-heading">Feedback</h2>
					<p className="leading-relaxed text-body">
						We're constantly working to improve happenDK. If you have feedback
						about the platform, suggestions for new features, or notice any
						issues with event listings, please don't hesitate to reach out.
					</p>
				</div>
				<div className="contact-sections__item">
					<h2 className="mb-3 text-xl font-semibold text-heading">
						Event Submissions
					</h2>
					<p className="leading-relaxed text-body">
						If you're an event organizer and would like your events to be
						featured on happenDK, please contact us with details about your
						event and we'll work with you to get it listed.
					</p>
				</div>
				<div className="contact-sections__item">
					<h2 className="mb-3 text-xl font-semibold text-heading">Email</h2>
					<p className="text-body">
						<a
							href="mailto:contact@happendk.com"
							className="text-accent transition-colors hover:text-active hover:underline"
						>
							contact@happendk.com
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContactSections;
