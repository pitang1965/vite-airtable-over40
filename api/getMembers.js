const { table } = require('./helpers/airtable');
const formattedReturn = require('./helpers/formattedReturn');

exports.handler = async () => {
  try {
    const formattedMembers = [];
    await table
      .select({
        filterByFormula: `Name != ''`,
        // テーブルの最初のmaxRecords件のレコードを取得
        maxRecords: 1500,
        view: process.env.AIRTABLE_VIEW_NAME,
      })
      .eachPage((records, fetchNextPage) => {
        records.forEach((record) => {
          console.log(
            'Retrieved',
            record.get('Name'),
            record.get('Title'),
            record.id
          );

          formattedMembers.push({ ...record.fields, id: record.id });
        });
        fetchNextPage();
      });
    return formattedReturn(200, formattedMembers);
  } catch (err) {
    console.error(err);
    return formattedReturn(err.statusCode, err.message);
  }
};
