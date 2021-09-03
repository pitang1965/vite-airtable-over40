const Airtable = require('airtable');

exports.handler = function (event, context, callback) {
  const base = new Airtable({
    apiKey: process.env.AIRTABLE_SECRET_API_KEY,
  }).base(process.env.AIRTABLE_BASE_ID);

  const table = [];

  base(process.env.AIRTABLE_TABLE_NAME)
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

          table.push({...record.fields, id: record.id});
        });
        // 次のページを取得するには、`fetchNextPage` を呼び出してください。
        // まだレコードがある場合、`page` が再度呼び出されます。
        // すべてのレコードが取得された場合、`done` が呼び出されます。
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          callback({
            statusCode: err.statusCode,
            body: JSON.stringify(err.message),
          });
        }
        const response = {
          statusCode: 200, // HTTPステータスコード (200:成功)
          body: JSON.stringify(table),
        };
        callback(null, response);
      }
    );
};
