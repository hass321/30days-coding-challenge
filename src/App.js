import React, { Component } from "react";
import "./App.css";

//Components
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
      </div>
    );
  }
}

export default App;
