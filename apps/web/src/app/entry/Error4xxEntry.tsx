import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Error4xxPage from "../pages/Error4xxPage.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element not found");
}

createRoot(rootElement).render(
	<StrictMode>
		<Error4xxPage />
	</StrictMode>,
);
