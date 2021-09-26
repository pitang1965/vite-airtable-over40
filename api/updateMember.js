const { table } = require('./utils/airtable');
const {getAccessTokenFromHeaders} = require('./utils/auth');
const formattedReturn = require('./utils/formattedReturn');

exports.handler = async (event) => {
  if (event.httpMethod !== 'PATCH') {
    return formattedReturn(405, 'Bad request');
  }
  const { id, fields } = JSON.parse(event.body);
  const token = getAccessTokenFromHeaders(event.headers);
  if (!token) {
    return formattedReturn(401, 'ログインしていません。');
  }

  try {
    const updatedMember = await table.update([{ id, fields }]);
    return formattedReturn(200, updatedMember);
  } catch (err) {
    console.error(err);
    return formattedReturn(err.statusCode, err.message);
  }
};
