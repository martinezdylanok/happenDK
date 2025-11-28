import Layout from "@/components/Layout";
import EventList from "../../features/event-list/EventList";

const SignupPage = () => {
	return (
		<Layout>
			<div className="signup-page container mx-auto px-6 py-12">
				<EventList />
			</div>
		</Layout>
	);
};

export default SignupPage;
