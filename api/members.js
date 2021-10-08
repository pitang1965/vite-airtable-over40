const formattedReturn = require('./utils/formattedReturn');
const getMembers = require('./getMembers');
const updateMember = require('./updateMember');

exports.handler = async (event) => {
  if (event.httpMethod === 'GET') {
    return await getMembers(event);
  } else if (event.httpMethod === 'POST') {
    return formattedReturn(405, 'POSTメソッドはありません。');
  } else if (event.httpMethod === 'PUT') {
    return formattedReturn(405, 'PUTメソッドはありません。');
  } else if (event.httpMethod === 'DELETE') {
    return formattedReturn(405, 'DELETEメソッドはありません。');
  } else if (event.httpMethod === 'PATCH') {
    return await updateMember(event);
  } else {
    return formattedReturn(405, 'そのメソッドはありません。');
  }
};
