import type { RequestOptions } from "./buildRequestOptions";
import type { Event } from "./eventType";
import parseEvents from "./parseEvents";

interface EventsResponse {
	raw: any;
	events: Event[];
}

const fetchAndParseData = async (
	postRequestOptions: RequestOptions,
): Promise<EventsResponse> => {
	try {
		const response = await fetch(postRequestOptions.url, {
			method: postRequestOptions.method,
			headers: postRequestOptions.headers,
			body: postRequestOptions.body,
		});

		if (response.ok) {
			const data = await response.json();
			const events = parseEvents(data);

			return { raw: data, events };
		} else {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
	} catch (error) {
		console.error(
			"Error:",
			error instanceof Error ? error.message : String(error),
		);
		throw error;
	}
};

export default fetchAndParseData;
