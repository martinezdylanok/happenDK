import type { Event } from "./eventType";

const parseEvents = (data: any): Event[] => {
	const groups = data?.grouped?.its_product_pid?.groups;

	if (!groups || !Array.isArray(groups)) {
		console.log("No groups found in response");
		return [];
	}

	const allEvents: Event[] = [];

	groups.forEach((group) => {
		const docs = group?.doclist?.docs;

		if (!docs || !Array.isArray(docs)) {
			console.log("No docs found in response");
		}

		docs.forEach((doc: any, index: number) => {
			// Handle description - concatenate if it's an array
			let description = "No description";
			if (doc.tm_X3b_en_product_hoved) {
				if (Array.isArray(doc.tm_X3b_en_product_hoved)) {
					description = doc.tm_X3b_en_product_hoved.join(" ");
				} else {
					description = doc.tm_X3b_en_product_hoved;
				}
			}

			const event = {
				id: index,
				title:
					doc.sort_X3b_en_product_title ||
					doc.sort_X3b_da_product_title ||
					doc.sort_X3b_de_product_title ||
					"No title",
				description: description,
				startDate: doc.ds_date_range_period_start_date || null,
				endDate: doc.ds_date_range_period_end_date || null,
				url: doc.zs_product_path_alias
					? `https://www.visitcopenhagen.com${doc.zs_product_path_alias}`
					: null,
				image: doc.zs_product_first_image || null,
			};

			allEvents.push(event);
		});
	});

	return allEvents;
};

export default parseEvents;
