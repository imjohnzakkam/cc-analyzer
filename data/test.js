const request = require("request");
const cheerio = require("cheerio");

request(
  "https://www.codechef.com/users/imreally_john",
  (error, response, html) => {
    if (!error && response.statusCode === 200) {
      var $ = cheerio.load(html);
      var Str = $("body");
      Str = Str.html();
      Str=Str.toString();
      var ans=[]
      var idx=Str.indexOf('colorByPoint:');
	  Str=Str.slice(idx);
      idx=Str.indexOf("data");
      Str.replace("color: colorForSections['solutions_partially_accepted']","");
      Str=Str.slice(idx);
      idx=Str.indexOf("[");
      Str=Str.slice(idx);
      var idx1=Str.indexOf("sliced");
      Str=Str.slice(0,idx1-1);
      Str=Str+"}]"
      for(var i=0;i<5;i++){
        idx1=Str.indexOf("y:");
         Str=Str.slice(idx1);
         var c="";
         var idx2=Str.indexOf(",");
         c=Str.slice(idx1+2,idx2-1);
         console.log(c);
         Str=Str.slice(idx2+1);
      }   

      ans.reverse();
    }
  }
);
