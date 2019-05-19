import React, { Component } from "react";
import Main from "./components/layout/Main";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <footer className="footer">Google Books API &copy;</footer>
      </div>
    );
  }
}

export default App;
