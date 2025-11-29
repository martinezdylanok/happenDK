import Layout from "@/components/Layout";
import AboutHero from "@/features/about/components/about-hero/AboutHero";
import AboutSections from "@/features/about/components/about-sections/AboutSections";

const AboutPage = () => {
	return (
		<Layout>
			<section className="about-page container mx-auto px-6 py-12">
				<AboutHero />
				<AboutSections />
			</section>
		</Layout>
	);
};

export default AboutPage;
