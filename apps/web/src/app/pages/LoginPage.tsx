import Layout from "@/components/Layout";
import EventList from "../../features/event-list/EventList";

const LoginPage = () => {
	return (
		<Layout>
			<div className="login-page container mx-auto px-6 py-12">
				<EventList />
			</div>
		</Layout>
	);
};

export default LoginPage;
