import { BrowserRouter, Route, Switch } from "react-router-dom";

import SingleUser from "./pages/SingleUser";
import CompareUsers from "./pages/CompareUsers";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <SingleUser />
            </Route>
            <Route path="/compare">
              <CompareUsers />
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
