const { members_t } = require('./utils/airtable');
const {
  getAccessTokenFromHeaders,
  validateAccessToken,
} = require('./utils/auth');
const formattedReturn = require('./utils/formattedReturn');
const { sendSlackMessage } = require('./utils/sendSlackMessage');

module.exports = async (event) => {
  if (event.httpMethod !== 'PATCH') {
    return formattedReturn(405, 'Bad request');
  }
  const { id, fields } = JSON.parse(event.body);
  const token = getAccessTokenFromHeaders(event.headers);
  const user = await validateAccessToken(token);
  if (!user) {
    return formattedReturn(401, '認証されていません。');
  }

  try {
    const updatedMember = await members_t.update([{ id, fields }]);
    sendSlackMessage(
      `${fields.Name}のメンバーデータが更新されました。https://over40-web-club-memeber.netlify.app/`
    );
    return formattedReturn(200, updatedMember);
  } catch (err) {
    console.error(err);
    return formattedReturn(err.statusCode, err.message);
  }
};
