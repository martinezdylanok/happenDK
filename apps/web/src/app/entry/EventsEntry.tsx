import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import EventsPage from "../pages/EventsPage";

const root = createRoot(document.getElementById("root")!);
root.render(
	<StrictMode>
		<EventsPage />
	</StrictMode>,
);
