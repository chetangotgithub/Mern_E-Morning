import { React, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./MyComponents/Nav";
import NewsComponent from "./MyComponents/NewsComponent";
import Notebook from "./MyComponents/Notebook";
import Home from "./MyComponents/Home";
import Weather from "./MyComponents/Weather";

import NoteState from "./Context/Notes/NotesState";
import SignIn from "./MyComponents/SignIn";
import SignUp from "./MyComponents/SignUp";
import Model from "./MyComponents/Model";
import News1 from "./MyComponents/News1";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NoteState>
            <Nav />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/News">
                <NewsComponent />
              </Route>
              <Route exact path="/Notes">
                <Notebook />
              </Route>
              <Route exact path="/SignUp">
                <SignUp />
              </Route>
              <Route exact path="/SignIn">
                <SignIn />
              </Route>
              <Route exact path="/Weather">
                <Weather />
              </Route>
            </Switch>
          </NoteState>
        </Router>
      </div>
    );
  }
}
