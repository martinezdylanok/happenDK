import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SignupPage from "../pages/SignupPage";

const root = createRoot(document.getElementById("root")!);
root.render(
	<StrictMode>
		<SignupPage />
	</StrictMode>,
);
