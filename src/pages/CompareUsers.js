import { React, useState, useEffect } from "react";
import axios from "axios";

import DoubleUserForm from "../components/formdata/DoubleUserForm";
import DoughnutChart from "../components/DoughnutChart";
import RatingGraph from "../components/RatingGraph";
import MixedRatingGraph from "../components/MixedRatingGraph";
import ProfileCard from "../components/ProfileCard";
import StatsCard from "../components/StatsCard";
import UnsolvedProbs from "../components/UnsolvedProbs";

const request = require("request");
const cheerio = require("cheerio");

function CompareUsers(props) {  
  console.log(props.TOKEN);
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
  const [curr_rating1, setCurrRating1] = useState(0);
  const [curr_rating2, setCurrRating2] = useState(0);
  const [username_error, Setusererror] = useState(0);
  const [maxRating1, SetMaxRating1] = useState(0);
  const [minRating1, SetMinRating1] = useState(0);
  const [maxRating2, SetMaxRating2] = useState(0);
  const [minRating2, SetMinRating2] = useState(0);
//   const [X1, SetX1] = useState(null);
//   const [X2, SetX2] = useState(null);
  function loader(user1, user2) {
    Setuser1(user1);
    setStats1([]);
    // SetX1(user1);
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
    // SetX2(user2);
    setStats2([]);
    Setrating2([]);
    setCurrRating1(0);
    setCurrRating2(0);
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
    Setusererror(0);
    setGlobalrank2(0);
    setCountryrank2(0);
    Setcounter(1 - counter);
    SetMaxRating1(0);
    SetMinRating2(0);
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
          var fla = 0;
          var front = "https://s3.amazonaws.com/codechef_shared";
          var $ = cheerio.load(html);
          var Str = $("body");
          Str = Str.html();
          Str = Str.toString();
          var Str1 = Str;
          var abtStr = Str;
          var pieChart = Str;
          let index = Str.indexOf("all_rating");
          Str = Str.slice(index);
          let index1 = Str.indexOf("[{");
          let id1 = Str.indexOf("[]");
          if (id1 < index1) {
            fla = 1;
          }
          index = Str.indexOf("}]");
          var S = Str.slice(index1, index + 2);

          let sitesvar = Str1.indexOf("/sites/d");
          Str1 = Str1.slice(sitesvar);
          let img_index = Str1.indexOf("width");
          console.log(img_index);
          var back = Str1.slice(0, img_index - 2);
          var Pic = front + back;
          console.log(Pic, img_index);
          if (img_index === -1)
            Pic =
              "https://cdn.codechef.com/sites/all/themes/abessive/images/user_default_thumb.jpg";
          Pic = Pic.toString();

          let abtMe = abtStr.indexOf("About Me:");

          var abt;
          if (abtMe === -1) {
            abt = "";
          } else {
            abtStr = abtStr.slice(abtMe + 23);
            abtMe = abtStr.indexOf("</");
            abt = abtStr.slice(0, abtMe);
          }
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
          avg = avg / verdicts[0];
          avg = Math.round(avg * 100) / 100;
          var minR = 0;
          var maxR = 0;
          var best = 0;
          var worst = 0;
          var maxUp = 0;
          var maxDown = 0;
          if (fla === 0) {
            var req = JSON.parse(S);

            for (var i = 0; i < req.length; i++) {
              ratings.push(parseInt(req[i].rating));
              dates.push(req[i].name);
              ranks.push(parseInt(req[i].rank));
              if (i === 0) {
                best = req[i].rank;
                worst = req[i].rank;
                maxUp = 0;
                maxDown = 0;
                minR = req[i].rating;
                maxR = req[i].rating;
              } else {
                best = Math.min(best, ranks[i]);
                worst = Math.max(worst, ranks[i]);
                maxUp = Math.max(maxUp, ratings[i] - ratings[i - 1]);
                maxDown = Math.max(maxDown, ratings[i - 1] - ratings[i]);
                minR = Math.min(minR, ratings[i]);
                maxR = Math.max(maxR, ratings[i]);
              }
            }
          }
          Best.push(best);
          Worst.push(worst);
          maxup.push(maxUp);
          maxdown.push(maxDown);
          if (User1 === User2) {
            SetAverage1(avg);
            setStats1(verdicts);
            if (fla === 0) {
              Setcontests1([req.length]);
            } else {
              Setcontests1([0]);
            }
            setmaxup1(maxup);
            setMaxdown1(maxdown);
            SetBestrank1(Best);
            Setworstrank1(Worst);
            Setrating1(ratings);
            setDATE1(dates);
            Setimage1(Pic);
            SetAbout1(abt);
            SetMinRating1(minR);
            SetMaxRating1(maxR);
            SetAverage2(avg);
            setStats2(verdicts);
            if (fla === 0) {
              Setcontests2([req.length]);
            } else {
              Setcontests2([0]);
            }
            setmaxup2(maxup);
            setMaxdown2(maxdown);
            SetBestrank2(Best);
            Setworstrank2(Worst);
            Setrating2(ratings);
            setDATE2(dates);
            Setimage2(Pic);
            SetAbout2(abt);
            SetMinRating2(minR);
            SetMaxRating2(maxR);
          } else if (UserName === User1) {
            SetAverage1(avg);
            setStats1(verdicts);
            if (fla === 0) {
              Setcontests1([req.length]);
            } else {
              Setcontests1([0]);
            }
            setmaxup1(maxup);
            setMaxdown1(maxdown);
            SetBestrank1(Best);
            Setworstrank1(Worst);
            Setrating1(ratings);
            setDATE1(dates);
            Setimage1(Pic);
            SetAbout1(abt);
            SetMinRating1(minR);
            SetMaxRating1(maxR);
          } else {
            SetAverage2(avg);
            setStats2(verdicts);
            if (fla === 0) {
              Setcontests2([req.length]);
            } else {
              Setcontests2([0]);
            }
            setmaxup2(maxup);
            setMaxdown2(maxdown);
            SetBestrank2(Best);
            Setworstrank2(Worst);
            Setrating2(ratings);
            setDATE2(dates);
            Setimage2(Pic);
            SetAbout2(abt);
            SetMinRating2(minR);
            SetMaxRating2(maxR);
          }
        }
      }
    );
  }
  useEffect(() => {
    var headers = {
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem('token'),
    };
    var UserName = User1;

    var url =
      "https://api.codechef.com/users/" +
      UserName +
      "?fields=username%2C%20fullname%2C%20country%2C%20state%2C%20city%2C%20rankings%2C%20ratings%2C%20occupation%2C%20language%2C%20organization%2C%20problemStats%2C%20submissionStats";
    // if (X1 !== null) {
      axios
        .get(url, { headers: headers })
        .then((res) => res)
        .then(
          (res) => {
            console.log("Hi1");
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

              var curr = res.data.result.data.content.ratings.allContest;
              var m1 = new Map();

              var PartialCodes = [];
              var solved = 0;
              var tried = 0;
              var unsolved = 0;
              var PartiallySolved = 0;
              var x, y, z;
              x = res.data.result.data.content.problemStats.partiallySolved;
              y = res.data.result.data.content.problemStats.solved;
              z = res.data.result.data.content.problemStats.attempted;

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
              // if (avg) {
              //   avg = avg / solved;
              // }
              // avg = Math.round(avg * 100) / 100;
              // setStats1(sol);
              Settried1(tried);
              setSolved1(solved);
              setUnsolved1(unsolved);
              setpartialLinks1(PartialCodes);
              setUnsolvedLinks1(Unsolved);
              setPartial1(PartiallySolved);
              // SetAverage1(avg);
              SetName1(Name);
              Setorg1(Org);
              SetWork1(Occu);
              Setcity1(userCity);
              Setstate1(userState);
              setCountry1(Country);
              setGlobalrank1(gb_rank);
              setCountryrank1(cntry_rank);
              Setusererror((prevState) => prevState + 1);
              setCurrRating1(curr);
            } else {
              alert("Enter correct Codechef username for user 1");
            }
          },
          (error) => {
            console.log(error);
          }
        );

      getRatingData(User1);
    // }
    UserName = User2;
    url =
      "https://api.codechef.com/users/" +
      UserName +
      "?fields=username%2C%20fullname%2C%20country%2C%20state%2C%20city%2C%20rankings%2C%20ratings%2C%20occupation%2C%20language%2C%20organization%2C%20problemStats%2C%20submissionStats";
    // if (X2 !== null && X1 !== null) {
      axios
        .get(url, { headers: headers })
        .then((res) => res)
        .then(
          (res) => {
            if (res.data.result.data.code === 9001) {
              console.log("Hi2");
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
              var curr = res.data.result.data.content.ratings.allContest;
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
              Settried2(tried);
              setSolved2(solved);
              setUnsolved2(unsolved);
              setpartialLinks2(PartialCodes);
              setUnsolvedLinks2(Unsolved);
              setPartial2(PartiallySolved);
              SetName2(Name);
              Setorg2(Org);
              SetWork2(Occu);
              Setcity2(userCity);
              Setstate2(userState);
              setCountry2(Country);
              setGlobalrank2(gb_rank);
              setCountryrank2(cntry_rank);
              Setusererror((prevState) => prevState + 1);
              setCurrRating2(curr);
            } else {
              Setusererror(0);
              alert("Enter correct Codechef username for user2");
            }
          },
          (error) => {
            console.log(error);
          }
        );
      getRatingData(User2);
    // }

    // SetX1(null);
    // SetX2(null);
  }, [counter]);
  return (
    <>
      <DoubleUserForm OnSubmit={loader} />
      {User1 && User2 && username_error === 2 ? (
        <>
          <div className="text-center grid grid-cols-2 divide-x-2 pt-4">
            <div>
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
                curr_rating={curr_rating1}
              />
              <StatsCard
                gb_rank={global_rank1}
                cntry_rank={country_rank1}
                best_rank={bestrank1}
                worst_rank={worstrank1}
                maxup={MaxUp1}
                maxdown={Maxdown1}
                total_contests={contests1}
                tried={Tried1}
                solved={Solved1}
                partial={Partial1}
                avg={Average1}
                unsolved={UnSolved1}
                max_rating={maxRating1}
                min_rating={minRating1}
              />
              <div>
                <DoughnutChart data={stats1} />
              </div>
              <div>
                <RatingGraph user={User1} date={DATE1} Rating={rating1} />
              </div>
              {/* <UnsolvedProbs
                partialLinks={partialLinks1}
                unsolvedLinks={unsolvedLinks1}
              /> */}
            </div>
            <div>
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
                curr_rating={curr_rating2}
              />
              <StatsCard
                gb_rank={global_rank2}
                cntry_rank={country_rank2}
                best_rank={bestrank2}
                worst_rank={worstrank2}
                maxup={MaxUp2}
                maxdown={Maxdown2}
                total_contests={contests2}
                tried={Tried2}
                solved={Solved2}
                partial={Partial2}
                avg={Average2}
                unsolved={UnSolved2}
                max_rating={maxRating2}
                min_rating={minRating2}
              />
              <div>
                <DoughnutChart data={stats2} />
              </div>
              <div>
                <RatingGraph user={User2} date={DATE2} Rating={rating2} />
              </div>
              {/* <UnsolvedProbs
                partialLinks={partialLinks2}
                unsolvedLinks={unsolvedLinks2}
              /> */}
            </div>
          </div>

          {rating1.length > 0 || rating2.length > 0 ? (
            <div>
              <MixedRatingGraph
                user1={User1}
                user2={User2}
                date1={DATE1}
                date2={DATE2}
                Rating1={rating1}
                Rating2={rating2}
              />
            </div>
          ) : (
            <div>No contests</div>
          )}
          <div className="text-center grid grid-cols-2 divide-x-2 pt-4">
            <div>
              <UnsolvedProbs
                partialLinks={partialLinks1}
                unsolvedLinks={unsolvedLinks1}
              />
            </div>
            <div>
              <UnsolvedProbs
                partialLinks={partialLinks2}
                unsolvedLinks={unsolvedLinks2}
              />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default CompareUsers;
