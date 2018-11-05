import React, { Component } from "react";
import "./App.css";

//Components
import Header from "./components/Header";
import MainSection from "./components/MainSection";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <MainSection />
      </div>
    );
  }
}

export default App;
