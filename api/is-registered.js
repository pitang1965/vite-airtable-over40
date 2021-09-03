const Airtable = require('airtable');

exports.handler = function (event, context, callback) {
  const base = new Airtable({
    apiKey: process.env.AIRTABLE_SECRET_API_KEY,
  }).base(process.env.AIRTABLE_BASE_ID);

  base(process.env.AIRTABLE_TABLE_NAME).find(
    'recBJKYSH30t3Nyjf---',
    function done(err, record) {
      if (err) {
        console.error(err);
        callback({
          statusCode: err.statusCode,
          body: JSON.stringify(err.message),
        });
      }
      const response = {
        statusCode: 200, // HTTPステータスコード (200:成功)
        body: JSON.stringify(record.fields),
      };
      callback(null, response);
    }
  );
};
