import { React, useState, useEffect } from "react";
import axios from "axios";

import SingleUserForm from "../components/formdata/SingleUserForm";
import DoughnutChart from "../components/DoughnutChart";
import RatingGraph from "../components/RatingGraph";
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
  const [counter,Setcounter]=useState([]);
  const [Solved,setSolved]=useState(0);
  const [UnSolved,setUnsolved]=useState(0);
  const [Tried,Settried]=useState(0);
  const [partialLinks,setpartialLinks]=useState([]);
  const [unsolvedLinks,setUnsolvedLinks]=useState([]);
  const [Partial,setPartial]=useState(0);
  const [Average,SetAverage]=useState(0);
  function loader(enteredUsername) {
    // setStats([]);
    // Setrating([]);
    // SetBestrank([0]);
    // Setworstrank([0]);
    // setMaxdown([0]);
    // setmaxup([0]);
    // Setcontests([0]);

    Setuser(enteredUsername);
    setStats([]);
    Setrating([]);
    SetBestrank([0]);
    Setworstrank([0]);
    setMaxdown([0]);
    setmaxup([0]);
    Setcontests([0]);
    if(counter[0]===0) Setcounter([1]);
    else Setcounter([0]);
    Settried(0);
    SetAverage(0);
    setSolved(0);
    setUnsolved(0);
    setPartial(0);
    setpartialLinks([]);
    setUnsolvedLinks([]);
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
          var $ = cheerio.load(html);
          var Str = $("body");
          Str = Str.html();
          Str = Str.toString();
          let index = Str.indexOf("all_rating");
          Str = Str.slice(index);
          let index1 = Str.indexOf("[{");
          index = Str.indexOf("}]");
          var S = Str.slice(index1, index + 2);
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
        }
      }
    );
    return [ratings, dates, Best, Worst];
  }
  useEffect(() => {
    console.log(user);
    var headers = {
      Accept: "application/json",
      Authorization: "Bearer e34007671176242e09349591d3c570288002afa2",
    };
    var UserName = user;
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
            var m1=new Map();
            var avg=0;
            var PartialCodes=[];
            var solved=0;
            var tried=0;
            var unsolved=0;
            var PartiallySolved=0;
            var x,y,z;
            x=res.data.result.data.content.problemStats.partiallySolved;
            y=res.data.result.data.content.problemStats.solved
            z=res.data.result.data.content.problemStats.attempted
            avg=res.data.result.data.content.submissionStats.submittedSolutions;
           // console.log(avg);
        
            for(const item in x){
              PartiallySolved=PartiallySolved+x[item].length;
              for (var i=0;i<x[item].length;i++){
                PartialCodes.push(x[item][i]);
              }
            }
            for(const item in y){
              solved=solved+y[item].length;
              for(var j=0;j<y[item].length;j++){
                m1.set(y[item][j],1);
              }
            }
            var Unsolved=[];

            for(const item in z){
             
              for(var k=0;k<z[item].length;k++){
                if(!m1.get(z[item][k])){
                  Unsolved.push(z[item][k]);
                  unsolved=unsolved+1;
                }
                
              }
            }
      
            solved=solved-PartiallySolved;
            tried=solved+unsolved+PartiallySolved;
            if(avg){
              avg=avg/solved;
            }
            avg=(Math.round(avg*100))/100;
        
            setStats(sol);
            Settried(tried);
            setSolved(solved);
            setUnsolved(unsolved);
            setpartialLinks(PartialCodes);
            setUnsolvedLinks(Unsolved);
            setPartial(PartiallySolved);
            SetAverage(avg);

          } else {
            setStats([]);
            alert("Enter correct Codechef username");
            Setuser(null);
            return;
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
  }, [user,counter]);

  return (
    <>
      <SingleUserForm OnSubmit={loader} />
      {user ? (
        <>
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
          {
            partialLinks.map(Partial=>(
              
               <a href={"https://www.codechef.com/problems/"+Partial}>{Partial}<br></br></a>
               
          
            ))
          }
          {
            unsolvedLinks.map(unsolved=>(
              
               <a href={"https://www.codechef.com/problems/"+unsolved}>{unsolved}<br></br></a>
               
          
            ))
          }
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
