import { data } from "jquery";
import { React, useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const fetch = require("node-fetch");

function DoughnutChart(props) {
  var lbs=[
    "Accepted",
    "Wrong Answer",
    "Time limit Exceeded",
    "Runtime Error",
    "Compiliation Error",
    "Partially Accepted",
  ]
  if(props.data.length===0){
       lbs=[]
  }
//   const [stats, setStats] = useState([]);
//   useEffect(() => {
//     var headers = {
//       Accept: "application/json",
//       Authorization: "Bearer 44815009ba918f324c79c4d87ba979a36da94203",
//     };
//     var UserName="imreally_john"
//     const url = "https://api.codechef.com/users/"+UserName+"?fields=username%2C%20fullname%2C%20country%2C%20state%2C%20city%2C%20rankings%2C%20ratings%2C%20occupation%2C%20language%2C%20organization%2C%20problemStats%2C%20submissionStats";
//     fetch(url, {
//       headers: headers,
//     })
//       .then((res) => res.json())
//       .then(
//         (res) => {
//           var sol = [];
//           sol.push(res.result.data.content.submissionStats.acceptedSubmissions);
//           sol.push(res.result.data.content.submissionStats.wrongSubmissions);
//           sol.push(res.result.data.content.submissionStats.timeLimitExceed);
//           sol.push(res.result.data.content.submissionStats.runTimeError);
//           sol.push(res.result.data.content.submissionStats.compilationError);
//           sol.push(
//             res.result.data.content.submissionStats.partiallySolvedProblems
//           );
//           setStats(sol);
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//   }, []);

  return (
    <Doughnut
      data={{
        labels: lbs,
        datasets: [
          {
            label: "Submission Doughnut",
            data: props.data,
            backgroundColor: [
              "rgba(0, 255, 71, 0.5)",
              "rgba(255, 99, 132, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(255, 159, 64, 0.5)",
              "rgba(255, 255, 0, 0.5)",
              "rgba(0, 102, 255, 0.5)",
            ],
            borderColor: [
              "rgba(0, 255, 71, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 255, 0, 1)",
              "rgba(0, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }}
      height={400}
      width={400}
      options={{
        maintainAspectRatio: false,
      }}
    />
  );
}

export default DoughnutChart;
