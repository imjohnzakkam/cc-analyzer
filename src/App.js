import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SingleUser from "./pages/SingleUser";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/single_user">
              <SingleUser />
            </Route>
            <Route path="/compare_users">
              <div>Hi compare_users</div>
            </Route>
            <Route path="/feedback">
              <div>Hi feedback</div>
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
