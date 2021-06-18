import { React, useState, useEffect} from "react";
import axios from "axios";

import ClistTop5 from "../components/layout/Top5";
import SingleUserForm from "../components/formdata/SingleUserForm";
import DoughnutChart from "../components/DoughnutChart";
import RatingGraph from "../components/RatingGraph";
import ProfileCard from "../components/ProfileCard";
import StatsCard from "../components/StatsCard";
import UnsolvedProbs from "../components/UnsolvedProbs";

const request = require("request");
const cheerio = require("cheerio");

function SingleUser() {
  const [stats, setStats] = useState([]);
  const [user, Setuser] = useState(null);
  const [DATE, setDATE] = useState([]);
  const [rating, Setrating] = useState([]);
  const [bestrank, SetBestrank] = useState([]);
  const [worstrank, Setworstrank] = useState([]);
  const [MaxUp, setmaxup] = useState([]);
  const [Maxdown, setMaxdown] = useState([]);
  const [contests, Setcontests] = useState([]);
  const [counter, Setcounter] = useState(0);
  const [Solved, setSolved] = useState(0);
  const [UnSolved, setUnsolved] = useState(0);
  const [Tried, Settried] = useState(0);
  const [partialLinks, setpartialLinks] = useState([]);
  const [unsolvedLinks, setUnsolvedLinks] = useState([]);
  const [Partial, setPartial] = useState(0);
  const [Average, SetAverage] = useState(0);
  const [image, Setimage] = useState("");
  const [about, SetAbout] = useState("");
  const [name, SetName] = useState("");
  const [work, SetWork] = useState("");
  const [org, Setorg] = useState("");
  const [city, Setcity] = useState("");
  const [state, Setstate] = useState("");
  const [country, setCountry] = useState("");
  const [global_rank, setGlobalrank] = useState(0);
  const [country_rank, setCountryrank] = useState(0);
  const [flag,Setflag]=useState(0);
  function loader(enteredUsername) {
    Setuser("");
    Setuser(enteredUsername);
    setStats([]);
    Setrating([]);
    SetBestrank([0]);
    Setworstrank([0]);
    setMaxdown([0]);
    setmaxup([0]);
    Setcontests([0]);
    Setcounter(1);
    Settried(0);
    SetAverage(0);
    setSolved(0);
    setUnsolved(0);
    setPartial(0);
    Setimage("");
    SetAbout("");
    setpartialLinks([]);
    setUnsolvedLinks([]);
    SetName("");
    SetWork("");
    Setorg("");
	  Setcity("");
	  Setstate("");
    setCountry("");
	  setGlobalrank(0);
	  setCountryrank(0);
    Setflag(1);
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
          console.log(sitesvar);
          let img_index = Str1.indexOf("jpg");
          console.log(img_index);
          var back = Str1.slice(0, img_index + 3);
          var Pic = front + back;
          if (img_index === -1)
            Pic =
              "https://cdn.codechef.com/sites/all/themes/abessive/images/user_default_thumb.jpg";
          Pic = Pic.toString();
          console.log(Pic, back);
          let abtMe = abtStr.indexOf("About Me:");
          console.log(abtMe);
          var abt;
          if (abtMe === -1) {
            abt = "";
          } else {
            abtStr = abtStr.slice(abtMe + 23);
            abtMe = abtStr.indexOf("</");
            abt = abtStr.slice(0, abtMe);
          }
          console.log(abt);
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
          Setcontests([req.length]);
          setmaxup(maxup);
          setMaxdown(maxdown);
          SetBestrank(Best);
          Setworstrank(Worst);
          Setrating(ratings);
          setDATE(dates);
          Setimage(Pic);
          SetAbout(abt);

        }
      }
    );
    return [ratings, dates, Best, Worst];
  }
  useEffect(() => {
    console.log(user);
    var headers = {
      Accept: "application/json",
      Authorization: "Bearer 6037ea25bcb0022000245e271a1039f9d4625267",
    };
    var UserName = user;
    console.log(user);
    const url =
      "https://api.codechef.com/users/" +
      UserName +
      "?fields=username%2C%20fullname%2C%20country%2C%20state%2C%20city%2C%20rankings%2C%20ratings%2C%20occupation%2C%20language%2C%20organization%2C%20problemStats%2C%20submissionStats";
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
			      var gb_rank = res.data.result.data.content.rankings.allContestRanking.global;
			      var cntry_rank = res.data.result.data.content.rankings.allContestRanking.country;
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
            // console.log(avg);
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

            setStats(sol);
            Settried(tried);
            setSolved(solved);
            setUnsolved(unsolved);
            setpartialLinks(PartialCodes);
            setUnsolvedLinks(Unsolved);
            setPartial(PartiallySolved);
            SetAverage(avg);
            SetName(Name);
            Setorg(Org);
            SetWork(Occu);
			     Setcity(userCity);
			      Setstate(userState);
            setCountry(Country);
			      setGlobalrank(gb_rank);
			     setCountryrank(cntry_rank);
           Setcounter(2);
     
          } else {
  
       Setcounter(2);
      
  			Setuser(null);
        alert("Enter correct Codechef username"); 
	                       
          }
        },
        (error) => {
          console.log(error);
        }
      );
    var x, y, a, b;
    [x, y, a, b] = getRatingData(user);
    console.log(x, y, a, b);
    console.log(user);
   
  }, [user, counter]);


  
  return (
    <>
      <SingleUserForm OnSubmit={loader} />
	    {!flag?<ClistTop5 />:<></>}
      {(user && counter===2)? (
        <>
			<ProfileCard 
			img = {image}
			username = {user} 
			fullname = {name}
			city = {city}
			state = {state}
			country = {country}
			occupation = {work}
			organization = {org}
			abt = {about}
			/>
			<StatsCard 
				gb_rank = {global_rank}
				cntry_rank = {country_rank}
				best_rank = {bestrank}
				worst_rank = {worstrank}
				maxup = {MaxUp}
				maxdown = {Maxdown}
				total_contests = {contests}
				tried = {Tried}
				solved = {Solved}
				partial = {Partial}
				avg = {Average}
				unsolved = {UnSolved}
			/>
			<UnsolvedProbs 
				partialLinks = {partialLinks}
				unsolvedLinks = {unsolvedLinks}
			/>

          {/* <img src={image} alt="user_image"></img>
          {about ? <div>About me: {about}</div> : <></>}
          <div>
            <a
              href={
                "https://www.codechef.com/users/" + user.toString() + "/teams"
              }
            >
              Teams
            </a>
          </div>
          <div>FullName: {name}</div>
          <div>UserName: {user}</div>
          {work ? <div>Occupation: {work}</div>:<></>}
          {org ? <div>Organization: {org}</div>:<></>}
          <div>Country={country}</div>
          <div>State:{state}</div>
          <div>City:{city}</div>
		  <div>Global Rank={global_rank}</div>
		  <div>Country Rank={country_rank}</div>
          <div>Bestrank={bestrank}</div>
          <div>Worstrank={worstrank}</div>
          <div>MaxUp={MaxUp}</div>
          <div>Maxdown={Maxdown}</div>
          <div>Total Contests={contests}</div>
          <div>Tried={Tried}</div>
          <div>solved={Solved}</div>
          <div>PartiallySolved={Partial}</div>
          <div>Average attempts={Average}</div>
          <div>unsolved={UnSolved}</div>
          {partialLinks.map((Partial) => (
            <a href={"https://www.codechef.com/problems/" + Partial}>
              {Partial}
              <br></br>
            </a>
          ))}
          {unsolvedLinks.map((unsolved) => (
            <a href={"https://www.codechef.com/problems/" + unsolved}>
              {unsolved}
              <br></br>
            </a>
          ))} */}
          <div>
            <DoughnutChart data={stats} />
          </div>
          {rating.length > 0 ? (
            <div>
              <RatingGraph date={DATE} Rating={rating} />
            </div>
          ) : (
            <div>No contests</div>
          )}
        </>
      ) : (
        <> </>
      )}
    </>
  );
}

export default SingleUser;
