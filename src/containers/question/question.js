import React, { Component } from "react";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import { connect } from "react-redux";
import "./question.css";
import { updateAnswer } from "../../actions/result";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { errorMsg: "" };
  }
  handleChange = (event, index, value) => {
    this.props.updateAnswer(
      this.props.result.answers,
      value,
      this.props.questionNumber
    );
  };

  render() {
    let options = this.props.options.map((item, index) => (
      <MenuItem key={index} value={item} primaryText={item} />
    ));

    let message =
      this.props.result.errorMessage !== "" &&
      (this.props.result.answers[this.props.questionNumber] === 1 ||
        typeof this.props.result.answers[this.props.questionNumber] ==
          "undefined") ? (
        <i style={{ margin: 12, color: "red" }}>Not Answered </i>
      ) : this.props.result.submitted &&
      this.props.result.answers[this.props.questionNumber] !==
        this.props.answer ? (
        <i style={{ margin: 12, color: "red" }}>Incorrect Answer </i>
      ) : this.props.result.submitted &&
      this.props.result.answers[this.props.questionNumber] ===
        this.props.answer ? (
        <i style={{ margin: 12, color: "green" }}>Correct Answer </i>
      ) : null;

    return (
      <div>
        <div className="question">
          {this.props.questionNumber + 1}. {this.props.question}{" "}
        </div>
        <div className="answer">
          <DropDownMenu
            value={
              typeof this.props.result.answers[this.props.questionNumber] ==
              "undefined"
                ? 1
                : this.props.result.answers[this.props.questionNumber]
            }
            style={{ width: 300, backgroundColor: "white" }}
            onChange={this.handleChange}
            autoWidth={false}
          >
            <MenuItem value={1} primaryText="Select your answer" />
            {options}
            {this.state.errorMsg}
          </DropDownMenu>
          {message}
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
    updateAnswer: (answers, ans, index) => {
      dispatch(updateAnswer(answers, ans, index));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Question);
