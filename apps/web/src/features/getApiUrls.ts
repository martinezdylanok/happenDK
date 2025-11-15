export interface ApiUrls {
	url: string;
	searchUrl: string;
	originUrl: string;
	refererUrl: string;
}

const setUrls = (): ApiUrls => {
	const urls: ApiUrls = {
		url: "https://www.visitcopenhagen.com/explore/events-cid58/events-cid59?filters=date-range:[%20TO%20]",
		searchUrl:
			"https://corsproxy.io/?" +
			encodeURIComponent(
				"https://www.visitcopenhagen.com/search?group=true&group.field=its_product_pid",
			),
		originUrl: "https://www.visitcopenhagen.com",
		refererUrl:
			"https://www.visitcopenhagen.com/explore/events-cid58/events-cid59",
	};

	return urls;
};

export default setUrls;
