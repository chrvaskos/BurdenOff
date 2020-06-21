import React from "react";
import "./css/App.css";
import { Switch, Route } from "react-router-dom";

import Main from "./pages";
import login from "./pages/login";
import join from "./pages/join";
import expertJoin from "./pages/expert-join";
import usefulLinks from "./pages/useful-links";
import faq from "./pages/faq";
import posts from "./pages/posts";
import myposts from "./pages/myposts";
import submit from "./pages/submit";
import session from "./pages/session";
import admin from "./pages/admin";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" component={login} />
      <Route path="/join" component={join} />
      <Route path="/expert-join" component={expertJoin} />
      <Route path="/useful-links" component={usefulLinks} />
      <Route path="/faq" component={faq} />
      <Route path="/posts" component={posts} />
      <Route path="/myposts" component={myposts} />
      <Route path="/submit" component={submit} />
      <Route path="/session" component={session} />
      <Route path="/admin" component={admin} />
    </Switch>
  );
}

export default App;
