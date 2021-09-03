const { table } = require('./helpers/airtable');
const formattedReturn = require('./helpers/formattedReturn');

exports.handler = function (event, context, callback) {
  const reconstructedTable = [];

  table
    .select({
      // AIRTABLE_TABLE_NAMEで指定したテーブルの最初のmaxRecords件のレコードを取得
      maxRecords: 1500,
      view: process.env.AIRTABLE_VIEW_NAME,
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // 本関数(`page`)はレコードのページごとに呼び出されます。

        records.forEach(function (record) {
          console.log(
            'Retrieved',
            record.get('Name'),
            record.get('Title'),
            record.id
          );

          reconstructedTable.push({ ...record.fields, id: record.id });
        });
        // 次のページを取得するには、`fetchNextPage` を呼び出してください。
        // まだレコードがある場合、`page` が再度呼び出されます。
        // すべてのレコードが取得された場合、`done` が呼び出されます。
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          callback(formattedReturn(err.statusCode, err.message));
        }
        callback(null, formattedReturn(200, reconstructedTable));
      }
    );
};
