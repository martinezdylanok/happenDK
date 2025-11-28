import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { type Plugin } from "vite";

// File vite.plugin.ts will be used for future custom plugins used in vite

const __dirname = dirname(fileURLToPath(import.meta.url));

const htmlInputs = {
	main: resolve(__dirname, "index.html"),
	events: resolve(__dirname, "pages/events.html"),
	about: resolve(__dirname, "pages/about.html"),
	contact: resolve(__dirname, "pages/contact.html"),
	login: resolve(__dirname, "pages/login.html"),
	signup: resolve(__dirname, "pages/signup.html"),
	error404: resolve(__dirname, "pages/errors/404.html"),
	error5xx: resolve(__dirname, "pages/errors/500.html"),
} satisfies Record<string, string>;

const prettyRouteMap: Record<string, string> = {
	"/events": "/pages/events.html",
	"/about": "/pages/about.html",
	"/contact": "/pages/contact.html",
	"/login": "/pages/login.html",
	"/signup": "/pages/signup.html",
	"/404": "/pages/errors/404.html",
	"/500": "/pages/errors/500.html",
};

const prettyRouteProxy = (): Plugin => ({
	name: "pretty-route-proxy",
	configureServer(server) {
		server.middlewares.use((req, _res, next) => {
			const incomingPath = req.url?.split("?")[0];
			if (!incomingPath) return next();

			const rewrittenPath = prettyRouteMap[incomingPath];
			if (rewrittenPath) {
				req.url = rewrittenPath;
			}
			return next();
		});
	},
});

export { htmlInputs, prettyRouteProxy };
