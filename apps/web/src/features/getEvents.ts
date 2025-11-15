import buildRequestOptions from "./buildRequestOptions.ts";
import buildSearchQuery from "./buildSearchQuery.ts";
import fetchAndParseData from "./fetchAndParseData.ts";
import getApiUrls from "./getApiUrls.ts";
import getDateRange from "./getDateRange.ts";

const getEvents = async () => {
	try {
		const dateRange = getDateRange();
		const searchQuery = buildSearchQuery(dateRange);
		const apiUrls = getApiUrls();
		const requestOptions = buildRequestOptions(apiUrls, searchQuery);
		const eventsData = await fetchAndParseData(requestOptions);
		return eventsData;
	} catch (error) {
		console.error("Error:", (error as Error).message);
		throw error;
	}
};

export default getEvents;
