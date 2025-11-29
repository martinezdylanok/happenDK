import Layout from "@/components/Layout";
import LoginHero from "@/features/login/components/login-hero/LoginHero";

const LoginPage = () => {
	return (
		<Layout>
			<section className="login-page container mx-auto px-6 py-12">
				<LoginHero />
			</section>
		</Layout>
	);
};

export default LoginPage;
