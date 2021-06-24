const axios = require("axios");

const headers = {
  "Content-Type": "application/json",
};

const data = {
  grant_type: "client_credentials",
  scope: "public",
  client_id: "32548c7afdb530580b09e85b6ad3660b",
  client_secret: "c6be48c141fa202181cd43a567ddbd82",
  redirect_uri: "https://google.com",
};

var url = "https://api.codechef.com/oauth/token";

var Token = "";
axios.post(url, data, { headers: headers }).then((res) => {
  Token = res.data.result.data.access_token;
  console.log(Token);
});
