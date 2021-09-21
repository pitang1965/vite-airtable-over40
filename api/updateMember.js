const { table } = require('./utils/airtable');
const formattedReturn = require('./utils/formattedReturn');

module.exports = async (event) => {
  const { id, ...fields } = JSON.parse(event.body);
  try {
    const updatedMember = await table.update([{ id, fields }]);
    return formattedReturn(200, updatedMember);
  } catch (err) {
    console.error(err);
    return formattedReturn(err.statusCode, err.message);
  }
};
