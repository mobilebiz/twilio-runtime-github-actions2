require("dotenv").config();
const axios = require("axios");
const data = JSON.stringify({
  event_type: "setup",
  client_payload: {
    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
    TWILIO_API_KEY: process.env.TWILIO_API_KEY,
    TWILIO_API_SECRET: process.env.TWILIO_API_SECRET,
  },
});

const config = {
  method: "post",
  url: `https://api.github.com/repos/${process.env.GITHUB_ID}/twilio-runtime-github-actions2/dispatches`,
  headers: {
    Accept: "application/vnd.github.v3+json",
    Authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
  data: data,
};

axios(config)
  .then((response) => {
    console.log(`Done. ${JSON.stringify(response.data)}`);
  })
  .catch((error) => {
    console.log(error);
  });
