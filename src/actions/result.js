import { data } from "../components/data";

export function updateResult(answers) {
  return dispatch => {
    var correct = 0,
      wrong = 0,
      submitReady = true,
      answerscopy = [];


    for(let i=0;i<data.quiz.length;i++) {
      if (data.quiz[i].answer === answers[i]) {
        correct++;
      } else {
        wrong++;
      }
    }

    answerscopy = [...answers];
    answerscopy = answerscopy.filter(n => n !== undefined && n !== 1);

    submitReady = answerscopy.length < data.quiz.length ? false : true;

    if (submitReady) {
      dispatch({
        type: "UPDATE_RESULT",
        payload: {
          correct: correct,
          wrong: wrong,
          submitted: true,
          errorMsg: ""
        }
      });
    } else {
      dispatch({
        type: "UPDATE_RESULT",
        payload: {
          correct: 0,
          wrong: 0,
          submitted: false,
          errorMsg: "Please answer all questions:"
        }
      });
    }
  };
}

export function updateAnswer(answers, ans, index) {
  return dispatch => {
    if (typeof answers == "undefined") {
      answers = new Array(index + 1)
        .join("1")
        .split("")
        .map(parseFloat);
    }

    answers[index] = ans;

    dispatch({
      type: "UPDATE_ANSWER",
      payload: {
        updatedanswer: answers,
        submitted: false
      }
    });
  };
}

export function clearData() {
  return dispatch => {
    dispatch({
      type: "CLEAR_DATA",
      payload: {
        answers: new Array(data.quiz.length + 1)
          .join("1")
          .split("")
          .map(parseFloat),
        correct: 0,
        wrong: 0,
        submitted: false
      }
    });
  };
}
