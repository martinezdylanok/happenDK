import Layout from "@/components/Layout";
import ContactHero from "@/features/contact/components/contact-hero/ContactHero";
import ContactSections from "@/features/contact/components/contact-sections/ContactSections";

const ContactPage = () => {
	return (
		<Layout>
			<section className="contact-page container mx-auto px-6 py-12">
				<ContactHero />
				<ContactSections />
			</section>
		</Layout>
	);
};

export default ContactPage;
