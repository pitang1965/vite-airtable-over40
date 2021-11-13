const { getWorkshops } = require('./utils/airtable');
const formattedReturn = require('./utils/formattedReturn');

module.exports = async () => {
  try {
    const formattedWorkshops = await getWorkshops();
    return formattedReturn(200, formattedWorkshops);
  } catch (err) {
    console.error(err);
    return formattedReturn(err.statusCode, err.message);
  }
};
