// src/app/entry/homeEntry.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Error5xxPage from "../pages/Error5xxPage.tsx";

const root = createRoot(document.getElementById("root")!);
root.render(
	<StrictMode>
		<Error5xxPage />
	</StrictMode>,
);
