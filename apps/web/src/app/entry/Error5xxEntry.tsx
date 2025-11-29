import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Error5xxPage from "../pages/Error5xxPage.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element not found");
}

createRoot(rootElement).render(
	<StrictMode>
		<Error5xxPage />
	</StrictMode>,
);
