const request = require("request");
const cheerio = require("cheerio");

request(
  "https://www.codechef.com/ratings/all?filterBy=Country%3DIndia",
  (error, response, html) => {
    if (!error && response.statusCode === 200) {
      var $ = cheerio.load(html);
      var Str = $("body");
      Str = Str.html();
      Str = Str.toString();
	    console.log(Str);
    }
  }
);
