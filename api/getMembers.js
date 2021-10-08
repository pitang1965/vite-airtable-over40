const { getMembers } = require('./utils/airtable');
const formattedReturn = require('./utils/formattedReturn');

module.exports = async () => {
  try {
    const formattedMembers = await getMembers();
    return formattedReturn(200, formattedMembers);
  } catch (err) {
    console.error(err);
    return formattedReturn(err.statusCode, err.message);
  }
};
