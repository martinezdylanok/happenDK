import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import AboutPage from "../pages/AboutPage";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element not found");
}

createRoot(rootElement).render(
	<StrictMode>
		<AboutPage />
	</StrictMode>,
);
