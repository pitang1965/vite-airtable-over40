const formattedReturn = require('./utils/formattedReturn');
const getWorkshops = require('./getWorkshops');

exports.handler = async (event) => {
  if (event.httpMethod === 'GET') {
    return await getWorkshops(event);
  } else if (event.httpMethod === 'POST') {
    return formattedReturn(405, 'POSTメソッドはありません。');
  } else if (event.httpMethod === 'PUT') {
    return formattedReturn(405, 'PUTメソッドはありません。');
  } else if (event.httpMethod === 'DELETE') {
    return formattedReturn(405, 'DELETEメソッドはありません。');
  } else if (event.httpMethod === 'PATCH') {
    return formattedReturn(405, 'PATCHメソッドはありません。');
  } else {
    return formattedReturn(405, 'そのメソッドはありません。');
  }
};
