const setDates = () => {
	const now = new Date();

	const startDate = new Date(
		Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1, 0, 0, 0, 0),
	).toISOString();

	const endDate = new Date(
		Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 0, 23, 59, 59, 999),
	).toISOString();

	return { now, startDate, endDate };
};

export default setDates;
