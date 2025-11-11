const setBody = (startDate, endDate) => {
  const body = {
    params: { wt: "json" },
    filter: [`(drs_date_range_period:[${startDate} TO ${endDate}])`],
    query:
      'ss_search_api_datasource:"entity:product" ' +
      'AND ss_search_api_language:"en" ' +
      'AND its_product_category:"58" ' +
      'AND its_product_subcategory:"59" ' +
      'AND -bs_field_is_deleted:true ' +
      'AND (ds_date_range_period_end_date:[NOW TO *] OR (*:* NOT ds_date_range_period_end_date:[* TO *]))',
    limit: 10000,
    sort: "bs_field_period_date_range_exists desc, ds_date_range_period_start_date asc, ds_date_range_period_end_date asc, sort_product_title asc, sort_X3b_und_product_title asc"
  };

  return body;
}



export default setBody;