export interface DateRange {
	now: Date;
	startDate: string;
	endDate: string;
}

const getDateRange = (): DateRange => {
	const now = new Date();

	const dates: DateRange = {
		now,
		startDate: new Date(
			Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1, 0, 0, 0, 0),
		).toISOString(),
		endDate: new Date(
			Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 0, 23, 59, 59, 999),
		).toISOString(),
	};

	return dates;
};

export default getDateRange;
