import Layout from "@/components/Layout";
import Error5xxHero from "@/features/errors/components/error-5xx-hero/Error5xxHero";

const Error5xxPage = () => {
	return (
		<Layout>
			<section className="error-5xx-page container mx-auto px-6 py-12">
				<Error5xxHero />
			</section>
		</Layout>
	);
};

export default Error5xxPage;
