const fetch = require("node-fetch");

async function getData() {
  var headers = {
    Accept: "application/json;charset=UTF-8",
    Authorization: "Bearer faf89e6d8546a8dc16ecc1a7a41695de303140cb",
  };
  const url = "https://api.codechef.com/users/imreally_john?fields=username%2C%20fullname%2C%20country%2C%20state%2C%20city%2C%20rankings%2C%20ratings%2C%20occupation%2C%20language%2C%20organization%2C%20problemStats%2C%20submissionStats";
  fetch(url, {
    headers: headers,
  })
    .then((res) => res.json())
    .then(
      (res) => {
        var sol = [];
        sol.push(res.result.data.content.submissionStats.acceptedSubmissions);
        sol.push(res.result.data.content.submissionStats.wrongSubmissions);
        sol.push(res.result.data.content.submissionStats.timeLimitExceed);
        sol.push(res.result.data.content.submissionStats.runTimeError);
        sol.push(res.result.data.content.submissionStats.compilationError);
        sol.push(
          res.result.data.content.submissionStats.partiallySolvedProblems
        );
        // console.log(sol);
      },
      (error) => {}
    );
}
getData();

// getData().then((data) => {
//
// });
