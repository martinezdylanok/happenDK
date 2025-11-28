// src/app/entry/homeEntry.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AboutPage from "../pages/AboutPage";

const root = createRoot(document.getElementById("root")!);
root.render(
	<StrictMode>
		<AboutPage />
	</StrictMode>,
);
