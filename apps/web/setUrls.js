const setUrls = () => {
	const url =
		"https://www.visitcopenhagen.com/explore/events-cid58/events-cid59?filters=date-range:[%20TO%20]";
	/* Added CORS proxy to be able to do the POST request and fetch the data */
	const searchUrl =
		"https://corsproxy.io/?" +
		encodeURIComponent(
			"https://www.visitcopenhagen.com/search?group=true&group.field=its_product_pid",
		);
	const originUrl = "https://www.visitcopenhagen.com";
	const refererUrl =
		"https://www.visitcopenhagen.com/explore/events-cid58/events-cid59";

	return { url, searchUrl, originUrl, refererUrl };
};

export default setUrls;
