const request = require("request");
const cheerio = require("cheerio");

request(
  "https://www.codechef.com/users/daanish_adm",
  (error, response, html) => {
    if (!error && response.statusCode === 200) {
      var $ = cheerio.load(html);
      var Str = $("body");
      Str = Str.html();
      Str = Str.toString();
      var pieChart = Str;
      var verdict_cnt = [],
        names = [];
      var cby = pieChart.indexOf("colorByPoint:");
      pieChart = pieChart.slice(cby);
      cby = pieChart.indexOf("data");
      pieChart = pieChart.slice(cby);
      cby = pieChart.indexOf("[");
      pieChart = pieChart.slice(cby);
      var avg = 0;
      for (var p = 0; p < 6; p++) {
        var cby3 = pieChart.indexOf("name:");
        pieChart = pieChart.slice(cby3);
        var count1 = "";
        var cby4 = pieChart.indexOf(",");
        count1 = pieChart.slice(6, cby4 - 1);
        names.push(count1);
        var cby1 = pieChart.indexOf("y:");
        pieChart = pieChart.slice(cby1);
        var count = "";
        var cby2 = pieChart.indexOf(",");
        count = pieChart.slice(2, cby2);
        verdict_cnt.push(parseInt(count));
        avg = avg + parseInt(count);
        pieChart = pieChart.slice(cby2 + 1);
      }
      var verdicts = [0, 0, 0, 0, 0, 0];
      for (var j = 0; j < 6; j++) {
        if (names[j] === "solutions_partially_accepted") {
          verdicts[5] = verdict_cnt[j];
        } else if (names[j] === "time_limit_exceeded") {
          verdicts[2] = verdict_cnt[j];
        } else if (names[j] === "compile_error") {
          verdicts[4] = verdict_cnt[j];
        } else if (names[j] === "runtime_error") {
          verdicts[3] = verdict_cnt[j];
        } else if (names[j] === "wrong_answers") {
          verdicts[1] = verdict_cnt[j];
        } else verdicts[0] = verdict_cnt[j];
      }
      console.log(verdicts);
    }
  }
);
