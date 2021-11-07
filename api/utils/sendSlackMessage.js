const axios = require('axios');

const sendSlackMessage = async (message) => {
  const payload = {
    text: message,
  };
  try {
    await axios.post(process.env.SLACK_WEBHOOK_URL, payload);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendSlackMessage };