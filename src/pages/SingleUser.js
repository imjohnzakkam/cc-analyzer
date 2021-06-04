import { React, useState} from "react";

import SingleUserForm from "../components/formdata/SingleUserForm";
import DoughnutChart from "../components/DoughnutChart";

function SingleUser() {
 const [username, setUsername] = useState("");

  function displayData(props) {
    return <div>Hi</div>;
  }

  return (
    <>
      <SingleUserForm onSubmit={displayData()} />
      <div>
        <DoughnutChart />
      </div>
    </>
  );
}

export default SingleUser;
