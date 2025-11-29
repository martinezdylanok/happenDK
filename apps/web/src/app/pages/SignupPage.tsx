import Layout from "@/components/Layout";
import SignupHero from "@/features/signup/components/signup-hero/SignupHero";

const SignupPage = () => {
	return (
		<Layout>
			<section className="signup-page container mx-auto px-6 py-12">
				<SignupHero />
			</section>
		</Layout>
	);
};

export default SignupPage;
