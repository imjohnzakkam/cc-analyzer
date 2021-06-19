import { React, useState, useEffect } from "react";
import axios from "axios";

import DoubleUserForm from "../components/formdata/DoubleUserForm";
import DoughnutChart from "../components/DoughnutChart";
import RatingGraph from "../components/RatingGraph";
import ProfileCard from "../components/ProfileCard";
import StatsCard from "../components/StatsCard";
import UnsolvedProbs from "../components/UnsolvedProbs";
import Alert from "../components/Alert";

const request = require("request");
const cheerio = require("cheerio");

function CompareUsers() {
  const [User1, Setuser1] = useState(null);
  const [User2, Setuser2] = useState(null);
  const [stats1, setStats1] = useState([]);
  const [stats2, setStats2] = useState([]);
  const [DATE1, setDATE1] = useState([]);
  const [DATE2, setDATE2] = useState([]);
  const [rating1, Setrating1] = useState([]);
  const [rating2, Setrating2] = useState([]);
  const [bestrank1, SetBestrank1] = useState([]);
  const [bestrank2, SetBestrank2] = useState([]);
  const [worstrank1, Setworstrank1] = useState([]);
  const [worstrank2, Setworstrank2] = useState([]);
  const [MaxUp1, setmaxup1] = useState([]);
  const [MaxUp2, setmaxup2] = useState([]);
  const [Maxdown1, setMaxdown1] = useState([]);
  const [Maxdown2, setMaxdown2] = useState([]);
  const [contests1, Setcontests1] = useState([]);
  const [contests2, Setcontests2] = useState([]);
  const [counter, Setcounter] = useState(0);
  const [Solved1, setSolved1] = useState(0);
  const [Solved2, setSolved2] = useState(0);
  const [UnSolved1, setUnsolved1] = useState(0);
  const [UnSolved2, setUnsolved2] = useState(0);
  const [Tried1, Settried1] = useState(0);
  const [Tried2, Settried2] = useState(0);
  const [partialLinks1, setpartialLinks1] = useState([]);
  const [partialLinks2, setpartialLinks2] = useState([]);
  const [unsolvedLinks1, setUnsolvedLinks1] = useState([]);
  const [unsolvedLinks2, setUnsolvedLinks2] = useState([]);
  const [Partial1, setPartial1] = useState(0);
  const [Partial2, setPartial2] = useState(0);
  const [Average1, SetAverage1] = useState(0);
  const [Average2, SetAverage2] = useState(0);
  const [image1, Setimage1] = useState("");
  const [image2, Setimage2] = useState("");
  const [about1, SetAbout1] = useState("");
  const [about2, SetAbout2] = useState("");
  const [name1, SetName1] = useState("");
  const [name2, SetName2] = useState("");
  const [work1, SetWork1] = useState("");
  const [work2, SetWork2] = useState("");
  const [org1, Setorg1] = useState("");
  const [org2, Setorg2] = useState("");
  const [city1, Setcity1] = useState("");
  const [city2, Setcity2] = useState("");
  const [state1, Setstate1] = useState("");
  const [state2, Setstate2] = useState("");
  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");
  const [global_rank1, setGlobalrank1] = useState(0);
  const [global_rank2, setGlobalrank2] = useState(0);
  const [country_rank1, setCountryrank1] = useState(0);
  const [country_rank2, setCountryrank2] = useState(0);
  const [john,setJohn]=useState(0);
  const [F,setF]=useState(0);
  function loader(user1, user2) {
    Setuser1(user1);
    setStats1([]);
    Setrating1([]);
    SetBestrank1([0]);
    Setworstrank1([0]);
    setMaxdown1([0]);
    setmaxup1([0]);
    Setcontests1([0]);
    Settried1(0);
    SetAverage1(0);
    setSolved1(0);
    setUnsolved1(0);
    setPartial1(0);
    Setimage1("");
    SetAbout1("");
    setpartialLinks1([]);
    setUnsolvedLinks1([]);
    SetName1("");
    SetWork1("");
    Setorg1("");
    Setcity1("");
    Setstate1("");
    setCountry1("");
    setGlobalrank1(0);
    setCountryrank1(0);
    Setuser2(user2);
    setStats2([]);
    Setrating2([]);
    setJohn(0);
    SetBestrank2([0]);
    Setworstrank2([0]);
    setMaxdown2([0]);
    setmaxup2([0]);
    Setcontests2([0]);
    Settried2(0);
    SetAverage2(0);
    setSolved2(0);
    setUnsolved2(0);
    setPartial2(0);
    Setimage2("");
    SetAbout2("");
    setpartialLinks2([]);
    setUnsolvedLinks2([]);
    SetName2("");
    SetWork2("");
    Setorg2("");
    Setcity2("");
    Setstate2("");
    setCountry2("");
    setF(0);
    setGlobalrank2(0);
    setCountryrank2(0);
    Setcounter(1 - counter);
  }
  function getRatingData(UserName) {
    var ratings = [],
      ranks = [],
      dates = [];
    var Best = [];
    var Worst = [];
    var maxup = [];
    var maxdown = [];
    request(
      "https://aqueous-ravine-73981.herokuapp.com/https://www.codechef.com/users/" +
        UserName,
      (error, response, html) => {
        if (!error && response.statusCode === 200) {
          var front = "https://s3.amazonaws.com/codechef_shared";
          var $ = cheerio.load(html);
          var Str = $("body");
          Str = Str.html();
          Str = Str.toString();
          var Str1 = Str;
          var abtStr = Str;
          let index = Str.indexOf("all_rating");
          Str = Str.slice(index);
          let index1 = Str.indexOf("[{");
          index = Str.indexOf("}]");
          var S = Str.slice(index1, index + 2);

          let sitesvar = Str1.indexOf("/sites/d");
          Str1 = Str1.slice(sitesvar);
         // console.log(sitesvar);
          let img_index = Str1.indexOf("jpg");
         // console.log(img_index);
          var back = Str1.slice(0, img_index + 3);
          var Pic = front + back;
          if (img_index === -1)
            Pic =
              "https://cdn.codechef.com/sites/all/themes/abessive/images/user_default_thumb.jpg";
          Pic = Pic.toString();
        //  console.log(Pic, back);
          let abtMe = abtStr.indexOf("About Me:");
        //  console.log(abtMe);
          var abt;
          if (abtMe === -1) {
            abt = "";
          } else {
            abtStr = abtStr.slice(abtMe + 23);
            abtMe = abtStr.indexOf("</");
            abt = abtStr.slice(0, abtMe);
          }
        //  console.log(abt);
          var req = JSON.parse(S);
          var best, worst, maxUp, maxDown;
          for (var i = 0; i < req.length; i++) {
            ratings.push(parseInt(req[i].rating));
            dates.push(req[i].name);
            ranks.push(parseInt(req[i].rank));
            if (i === 0) {
              best = req[i].rank;
              worst = req[i].rank;
              maxUp = 0;
              maxDown = 0;
            } else {
              best = Math.min(best, ranks[i]);
              worst = Math.max(worst, ranks[i]);
              maxUp = Math.max(maxUp, ratings[i] - ratings[i - 1]);
              maxDown = Math.max(maxDown, ratings[i - 1] - ratings[i]);
            }
          }
          Best.push(best);
          Worst.push(worst);
          maxup.push(maxUp);
          maxdown.push(maxDown);
          if (UserName === User1) {
            Setcontests1([req.length]);
            setmaxup1(maxup);
            setMaxdown1(maxdown);
            SetBestrank1(Best);
            Setworstrank1(Worst);
            Setrating1(ratings);
            setDATE1(dates);
            Setimage1(Pic);
            SetAbout1(abt);
          } else {
            Setcontests2([req.length]);
            setmaxup2(maxup);
            setMaxdown2(maxdown);
            SetBestrank2(Best);
            Setworstrank2(Worst);
            Setrating2(ratings);
            setDATE2(dates);
            Setimage2(Pic);
            SetAbout2(abt);
          }
        }
      }
    );
  }
  useEffect(() => {
    var f=0;
    console.log(User1);
    var headers = {
      Accept: "application/json",
      Authorization: "Bearer 52308a7c4f0545a714385e12688937268544b197",
    };
    var UserName = User1;
    //console.log(User1);
    var url =
      "https://api.codechef.com/users/" +
      UserName +
      "?fields=username%2C%20fullname%2C%20country%2C%20state%2C%20city%2C%20rankings%2C%20ratings%2C%20occupation%2C%20language%2C%20organization%2C%20problemStats%2C%20submissionStats";
    axios
      .get(url, { headers: headers })
      .then((res) => res)
      .then(
        (res) => {
          f=1;
          if (res.data.result.data.code === 9001) {
            var Name = res.data.result.data.content.fullname;
            var Occu = res.data.result.data.content.occupation;
            var Org = res.data.result.data.content.organization;
            var Country = res.data.result.data.content.country.name;
            var userCity = res.data.result.data.content.city.name;
            var userState = res.data.result.data.content.state.name;
            var gb_rank =
              res.data.result.data.content.rankings.allContestRanking.global;
            var cntry_rank =
              res.data.result.data.content.rankings.allContestRanking.country;
            var sol = [];
            sol.push(
              res.data.result.data.content.submissionStats.acceptedSubmissions
            );
            sol.push(
              res.data.result.data.content.submissionStats.wrongSubmissions
            );
            sol.push(
              res.data.result.data.content.submissionStats.timeLimitExceed
            );
            sol.push(res.data.result.data.content.submissionStats.runTimeError);
            sol.push(
              res.data.result.data.content.submissionStats.compilationError
            );
            sol.push(
              res.data.result.data.content.submissionStats
                .partiallySolvedSubmissions
            );
            var m1 = new Map();
            var avg = 0;
            var PartialCodes = [];
            var solved = 0;
            var tried = 0;
            var unsolved = 0;
            var PartiallySolved = 0;
            var x, y, z;
            x = res.data.result.data.content.problemStats.partiallySolved;
            y = res.data.result.data.content.problemStats.solved;
            z = res.data.result.data.content.problemStats.attempted;
            avg =
              res.data.result.data.content.submissionStats.submittedSolutions;
            for (const item in x) {
              PartiallySolved = PartiallySolved + x[item].length;
              for (var i = 0; i < x[item].length; i++) {
                PartialCodes.push(x[item][i]);
              }
            }
            for (const item in y) {
              solved = solved + y[item].length;
              for (var j = 0; j < y[item].length; j++) {
                m1.set(y[item][j], 1);
              }
            }
            var Unsolved = [];

            for (const item in z) {
              for (var k = 0; k < z[item].length; k++) {
                if (!m1.get(z[item][k])) {
                  Unsolved.push(z[item][k]);
                  unsolved = unsolved + 1;
                }
              }
            }

            solved = solved - PartiallySolved;
            tried = solved + unsolved + PartiallySolved;
            if (avg) {
              avg = avg / solved;
            }
            avg = Math.round(avg * 100) / 100;
            setStats1(sol);
            Settried1(tried);
            setSolved1(solved);
            setUnsolved1(unsolved);
            setpartialLinks1(PartialCodes);
            setUnsolvedLinks1(Unsolved);
            setPartial1(PartiallySolved);
            SetAverage1(avg);
            SetName1(Name);
            Setorg1(Org);
            SetWork1(Occu);
            Setcity1(userCity);
            Setstate1(userState);
            setCountry1(Country);
            setGlobalrank1(gb_rank);
            setCountryrank1(cntry_rank);
            console.log("Wait");
          } else {
            console.log("Hello");
           setJohn(1);
           console.log(john,"hell")
           alert("Enter correct Codechef username for user 1");
            
       }
        },
        (error) => {
        //   console.log("Hello1");
        //   setJohn(1);
        //   console.log(john,"hell1")
        //   alert("Enter correct Codechef username for user 1");
          console.log(error);
        }
      );
    console.log(User1);
    

    UserName = User2;
    console.log(User2);
    url =
      "https://api.codechef.com/users/" +
      UserName +
      "?fields=username%2C%20fullname%2C%20country%2C%20state%2C%20city%2C%20rankings%2C%20ratings%2C%20occupation%2C%20language%2C%20organization%2C%20problemStats%2C%20submissionStats";

    if (true) {
		console.log(f, "hi");

    getRatingData(User1);
      axios
        .get(url, { headers: headers })
        .then((res) => res)
        .then(
          (res) => {
            if (res.data.result.data.code === 9001) {
              var Name = res.data.result.data.content.fullname;
              var Occu = res.data.result.data.content.occupation;
              var Org = res.data.result.data.content.organization;
              var Country = res.data.result.data.content.country.name;
              var userCity = res.data.result.data.content.city.name;
              var userState = res.data.result.data.content.state.name;
              var gb_rank =
                res.data.result.data.content.rankings.allContestRanking.global;
              var cntry_rank =
                res.data.result.data.content.rankings.allContestRanking.country;
              var sol = [];
              sol.push(
                res.data.result.data.content.submissionStats.acceptedSubmissions
              );
              sol.push(
                res.data.result.data.content.submissionStats.wrongSubmissions
              );
              sol.push(
                res.data.result.data.content.submissionStats.timeLimitExceed
              );
              sol.push(
                res.data.result.data.content.submissionStats.runTimeError
              );
              sol.push(
                res.data.result.data.content.submissionStats.compilationError
              );
              sol.push(
                res.data.result.data.content.submissionStats
                  .partiallySolvedSubmissions
              );
              var m1 = new Map();
              var avg = 0;
              var PartialCodes = [];
              var solved = 0;
              var tried = 0;
              var unsolved = 0;
              var PartiallySolved = 0;
              var x, y, z;
              x = res.data.result.data.content.problemStats.partiallySolved;
              y = res.data.result.data.content.problemStats.solved;
              z = res.data.result.data.content.problemStats.attempted;
              avg =
                res.data.result.data.content.submissionStats.submittedSolutions;
              for (const item in x) {
                PartiallySolved = PartiallySolved + x[item].length;
                for (var i = 0; i < x[item].length; i++) {
                  PartialCodes.push(x[item][i]);
                }
              }
              for (const item in y) {
                solved = solved + y[item].length;
                for (var j = 0; j < y[item].length; j++) {
                  m1.set(y[item][j], 1);
                }
              }
              var Unsolved = [];

              for (const item in z) {
                for (var k = 0; k < z[item].length; k++) {
                  if (!m1.get(z[item][k])) {
                    Unsolved.push(z[item][k]);
                    unsolved = unsolved + 1;
                  }
                }
              }
           //   console.log("HelloP");
              solved = solved - PartiallySolved;
              tried = solved + unsolved + PartiallySolved;
              if (avg) {
                avg = avg / solved;
              }
              avg = Math.round(avg * 100) / 100;
              setStats2(sol);
              Settried2(tried);
              setSolved2(solved);
              setUnsolved2(unsolved);
              setpartialLinks2(PartialCodes);
              setUnsolvedLinks2(Unsolved);
              setPartial2(PartiallySolved);
              SetAverage2(avg);
              SetName2(Name);
              Setorg2(Org);
              SetWork2(Occu);
              Setcity2(userCity);
              Setstate2(userState);
              setCountry2(Country);
              setGlobalrank2(gb_rank);
              setCountryrank2(cntry_rank);
              Setcounter(2);
            } else {
              // Setcounter(2);
              alert("Enter correct Codechef username for user2");
            }
          },
          (error) => {
            console.log(error);
          }
        );
        
      console.log(User2);
      getRatingData(User2);
    }
  }, [counter]);
  return (
    <>
      <DoubleUserForm OnSubmit={loader} />
      {console.log(counter)}
      {User1 && User2 && counter === 2 ? (
        <>
          <ProfileCard
            img={image1}
            username={User1}
            fullname={name1}
            city={city1}
            state={state1}
            country={country1}
            occupation={work1}
            organization={org1}
            abt={about1}
          />
          <ProfileCard
            img={image2}
            username={User2}
            fullname={name2}
            city={city2}
            state={state2}
            country={country2}
            occupation={work2}
            organization={org2}
            abt={about2}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default CompareUsers;
