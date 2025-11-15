import type { SearchQuery } from "./buildSearchQuery";
import type { ApiUrls } from "./getApiUrls";

export interface RequestOptions {
	url: string;
	method: string;
	headers: {
		Accept: string;
		"Content-Type": string;
		Origin: string;
		Referer: string;
	};
	body: string;
}

const buildRequestOptions = (
	apiUrls: ApiUrls,
	searchQuery: SearchQuery,
): RequestOptions => {
	const requestOptions: RequestOptions = {
		url: apiUrls.searchUrl,
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Origin: apiUrls.originUrl,
			Referer: apiUrls.refererUrl,
		},
		body: JSON.stringify(searchQuery),
	};

	return requestOptions;
};

export default buildRequestOptions;
