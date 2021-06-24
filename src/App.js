import { BrowserRouter, Route, Switch } from "react-router-dom";
import {useEffect } from "react";

import SingleUser from "./pages/SingleUser";
import CompareUsers from "./pages/CompareUsers";
import Info from "./pages/Info";
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import Layout from "./components/layout/Layout";

const axios = require("axios");

function App() {
  const headers = {
    "Content-Type": "application/json",
  };

  const data = {
    grant_type: "client_credentials",
    scope: "public",
    client_id: "32548c7afdb530580b09e85b6ad3660b",
    client_secret: "c6be48c141fa202181cd43a567ddbd82",
    redirect_uri: "https://google.com",
  };

  var url = "https://api.codechef.com/oauth/token";

  useEffect(() => {
    const refreshAuthLogic = failedRequest => axios.post(url, data, { headers: headers }).then(tokenRefreshResponse => {	
    localStorage.setItem('token', tokenRefreshResponse.data.result.data.access_token);
    console.log(localStorage.getItem('token'),"worst");
    failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.result.data.access_token;
    return Promise.resolve();
});


 createAuthRefreshInterceptor(axios, refreshAuthLogic);

  }, []);
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <SingleUser TOKEN={localStorage.getItem('token')} />
            </Route>
            <Route path="/compare">
              <CompareUsers TOKEN={localStorage.getItem('token')} />
            </Route>
            <Route path="/info">
              <Info TOKEN={localStorage.getItem('token')} />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
