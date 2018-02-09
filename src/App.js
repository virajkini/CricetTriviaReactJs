import React, { Component } from "react";

import ResultChart from "./components/resultchart/resultchart";
import { connect } from "react-redux";

import Quiz from "./containers/quiz/quiz";
import Header from "./components/header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="flexContainer MainContainer">
          <div className="flex1">
            <Quiz />
          </div>
          <div className="flex1">
            <ResultChart
              correct={this.props.result.correct}
              wrong={this.props.result.wrong}
            />
          </div>
        </div>


      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.result
  };
};

export default connect(mapStateToProps)(App);
