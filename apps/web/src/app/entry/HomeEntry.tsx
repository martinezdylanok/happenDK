// src/app/entry/homeEntry.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "../pages/HomePage";

const root = createRoot(document.getElementById("root")!);
root.render(
	<StrictMode>
		<HomePage />
	</StrictMode>,
);
