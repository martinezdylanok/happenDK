const setPostRequest = (searchUrl, originUrl, refererUrl, body) => {
	return () =>
		fetch(searchUrl, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Origin: `${originUrl}`,
				Referer: `${refererUrl}`,
			},
			body: JSON.stringify(body),
		});
};

export default setPostRequest;
