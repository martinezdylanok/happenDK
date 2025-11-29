import Layout from "@/components/Layout";
import Error4xxHero from "@/features/errors/components/error-4xx-hero/Error4xxHero";

const Error4xxPage = () => {
	return (
		<Layout>
			<section className="error-4xx-page container mx-auto px-6 py-12">
				<Error4xxHero />
			</section>
		</Layout>
	);
};

export default Error4xxPage;
