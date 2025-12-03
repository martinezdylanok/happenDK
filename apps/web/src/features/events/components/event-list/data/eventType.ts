export interface Event {
	id?: number;
	title: string;
	description: string;
	startDate: string | null;
	endDate: string | null;
	url: string | null;
	image: string | null;
}
