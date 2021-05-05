import React from "react";
import { Switch, Route } from "react-router-dom";
import "./assets/App.css";
import Nav from "./parts/Nav/Nav";
import Sidebar from "./parts/sideBar/SideBar";
import FrontPage from "./pages/FrontPage";
import PostPage from "./components/postPage/PostPage";
import { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import UserDetails from "./pages/UserDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Sidebar />

        <Fragment>
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/r/:subId" component={FrontPage} />
            <Route path="/r/:subId/:postId" component={PostPage} />
            <Route exact
              path="/r/:subId/:postId/:commentId"
              component={PostPage}
            />
            <Route path="/u/:userId" component={UserDetails} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
