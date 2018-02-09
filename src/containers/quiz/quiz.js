import React, { Component } from "react";
import { data } from "../../components/data";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";

import Question from "../question/question";
import RaisedButton from "material-ui/RaisedButton";
import { updateResult, clearData } from "../../actions/result";

import "./quiz.css";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  onCLickSubmit = () => {
    this.props.updateResult(this.props.result.answers);
  };

  onCLickClear = () => {
    this.props.clearData();
  };

  render() {
    let quizData = data.quiz.map((data, index) => (
      <Question
        key={index}
        questionNumber={index}
        question={data.question}
        options={data.options}
        answer={data.answer}
      />
    ));
    return (
      <div style={{width:"100%"}}>
        <h3 style={{ textAlign: "center" }}>Quiz</h3>
        <p style={{ color: "red" }}>{this.props.result.errorMessage}</p>
        <Scrollbars
          style={{
            border: "1px solid #d3d3d3",
            backgroundColor: "#e1e1e1",
            height: "400px",
            width: "100%",
            padding: "0 3px 0 0",
            borderRadius: "5px",
            boxShadow: " 0 2px 3px #ccc"
          }}
        >
          {quizData}
        </Scrollbars>
        <div className="flexContainer">
          <div className="flex1">
            <RaisedButton
              label="Submit"
              style={{ margin: 12, width: '90%' }}
              onClick={this.onCLickSubmit}
            />
          </div>
          <div className="flex1">
            <RaisedButton
              label="Clear Values"
              style={{ margin: 12, width: '90%' }}
              onClick={this.onCLickClear}
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

const mapDispatchToProps = dispatch => {
  return {
    updateResult: sub => {
      dispatch(updateResult(sub));
    },
    clearData: () => {
      dispatch(clearData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
