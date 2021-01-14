import React from "react";
// import the Router for react routing
import {Router} from "@reach/router";
// import components
import Home from "./components/Home";
import Number from "./components/Number";
import Word from "./components/Word";
import Rambo from "./components/Rambo";

function App() {
  return (
    <div className="App">
      <Router>
        {/* user types /home in the URL it takes them to the Home component */}
        <Home path="/home/"/>
        <Number path="/number/:userNumber" />
        <Word path="/word/:userWord"/>
        <Rambo path="/:userWord/:txtColor/:backColor" />
      </Router>
    </div>
  );
}

export default App;
