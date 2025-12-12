import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import { htmlInputs, prettyRouteProxy } from "./vite.plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [react(), tailwindcss(), prettyRouteProxy()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
	build: {
		rollupOptions: {
			input: htmlInputs,
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/test/setup.ts",
		css: true,
		coverage: {
			provider: "v8",
			reporter: ["text", "json", "html"],
			exclude: [
				"node_modules/",
				"dist/",
				"public/",
				"src/test/",
				"components.json",
				"jsconfig.json",
				"package.json",
				"tsconfig.app.json",
				"tsconfig.json",
				"tsconfig.node.json",
				"vite.config.ts",
				"vite.plugin.ts",
			],
		},
	},
});
