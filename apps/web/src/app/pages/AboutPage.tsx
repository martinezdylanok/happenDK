import Layout from "@/components/Layout";

const AboutPage = () => {
	return (
		<Layout>
			<div className="about-page container mx-auto px-6 py-12">
				<div className="about-page__content">
					<h1 className="mb-6 text-4xl font-bold text-heading">About Us</h1>
					<div className="about-page__sections grid grid-cols-2 space-y-6 text-body">
						<section className="about-page__section">
							<h2 className="mb-3 text-2xl font-semibold text-heading">
								Our Mission
							</h2>
							<p className="leading-relaxed">
								We want you to never run out of plans. Finding what to do should
								be easy.
							</p>
						</section>
						<section className="about-page__section">
							<h2 className="mb-3 text-2xl font-semibold text-heading">
								Finding Something to Do
							</h2>
							<p className="mb-4 leading-relaxed">
								happenDK pulls in events from everywhere and creates a
								personalized feed so you can quickly find what to do. You chill
								and we do the work:
							</p>
							<ul className="list-inside list-disc space-y-2 text-body">
								<li>Get the events from multiple sources</li>
								<li>Prune the raw data</li>
								<li>Display only what is relevant to you</li>
								<li>Provide a fast and minimal interface</li>
							</ul>
						</section>
						<section className="about-page__section">
							<h2 className="mb-3 text-2xl font-semibold text-heading">
								Future Plans
							</h2>
							<p className="leading-relaxed">
								We are constantly working on expanding our coverage to include
								events throughout Denmark. Our goal is to become the go-to
								platform for discovering events across the entire country.
							</p>
						</section>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default AboutPage;
