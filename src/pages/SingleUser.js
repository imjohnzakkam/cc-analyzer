import { React, useState, useEffect } from "react";

import SingleUserForm from "../components/formdata/SingleUserForm";
import DoughnutChart from "../components/DoughnutChart";

function SingleUser() {
  const [stats, setStats] = useState([]);
  const [user, Setuser] = useState(null);
  function loader(enteredUsername) {
    setStats([])
    Setuser(enteredUsername);
    
  }
  useEffect(() => {
    var headers = {
      Accept: "application/json",
      Authorization: "Bearer 51967b230f3dda2491a74fe23b767f596b70adfb",
    };
    console.log(user);
    var UserName = user;
    const url =
      "https://api.codechef.com/users/" +
      UserName +
      "?fields=username%2C%20fullname%2C%20country%2C%20state%2C%20city%2C%20rankings%2C%20ratings%2C%20occupation%2C%20language%2C%20organization%2C%20problemStats%2C%20submissionStats";
    fetch(url, {
      headers: headers,
    })
      .then((res) => res.json())
      .then(
        (res) => {
          //onsole.log(res);
          if (res.result.data.code === 9001) {
            var sol = [];
            sol.push(res.result.data.content.submissionStats.acceptedSubmissions);
            sol.push(res.result.data.content.submissionStats.wrongSubmissions);
            sol.push(res.result.data.content.submissionStats.timeLimitExceed);
            sol.push(res.result.data.content.submissionStats.runTimeError);
            sol.push(res.result.data.content.submissionStats.compilationError);
            sol.push(res.result.data.content.submissionStats.partiallySolvedProblems);
            setStats(sol);
          }
          else {
            setStats([]);
            alert("Enter correct Codechef username");
            Setuser(null);
          
          }
		 
		  
        },
        (error) => {
          console.log(error);
        }
      );
  }, [user]);


  return (
    <>
      <SingleUserForm OnSubmit={loader} />
      {user ? (
        <div>
          <DoughnutChart data={stats}/>
        </div>
      ) : (
        <h1>Enter user name</h1>
      )}
    </>
  );
}

export default SingleUser;
