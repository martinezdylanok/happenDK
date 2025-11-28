import Layout from "@/components/Layout";

const ContactPage = () => {
	return (
		<Layout>
			<div className="contact-page container mx-auto px-6 py-12">
				<div className="contact-page__content max-w-2xl">
					<h1 className="mb-6 text-4xl font-bold text-heading">Contact Us</h1>
					<div className="contact-page__sections space-y-8">
						<section className="contact-page__section">
							<h2 className="mb-3 text-xl font-semibold text-heading">
								Get in Touch
							</h2>
							<p className="mb-6 leading-relaxed text-body">
								Have a question, suggestion, or want to report an issue? We'd
								love to hear from you. Reach out through any of the following
								channels.
							</p>
						</section>
						<section className="contact-page__section">
							<h3 className="mb-3 text-xl font-semibold text-heading">
								Feedback
							</h3>
							<p className="leading-relaxed text-body">
								We're constantly working to improve happenDK. If you have
								feedback about the platform, suggestions for new features, or
								notice any issues with event listings, please don't hesitate to
								reach out.
							</p>
						</section>
						<section className="contact-page__section">
							<h3 className="mb-3 text-xl font-semibold text-heading">
								Event Submissions
							</h3>
							<p className="leading-relaxed text-body">
								If you're an event organizer and would like your events to be
								featured on happenDK, please contact us with details about your
								event and we'll work with you to get it listed.
							</p>
						</section>
						<section className="contact-page__section">
							<h3 className="mb-3 text-xl font-semibold text-heading">Email</h3>
							<p className="text-body">
								<a
									href="mailto:contact@happendk.com"
									className="text-accent transition-colors hover:text-active hover:underline"
								>
									contact@happendk.com
								</a>
							</p>
						</section>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ContactPage;
