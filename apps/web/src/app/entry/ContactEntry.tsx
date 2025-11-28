// src/app/entry/homeEntry.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContactPage from "../pages/ContactPage";

const root = createRoot(document.getElementById("root")!);
root.render(
	<StrictMode>
		<ContactPage />
	</StrictMode>,
);
