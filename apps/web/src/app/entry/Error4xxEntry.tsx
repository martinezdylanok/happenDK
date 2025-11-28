// src/app/entry/homeEntry.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Error4xxPage from "../pages/Error4xxPage.tsx";

const root = createRoot(document.getElementById("root")!);
root.render(
	<StrictMode>
		<Error4xxPage />
	</StrictMode>,
);
