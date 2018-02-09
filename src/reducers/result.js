const result = (
  state = {
    correct: 0,
    wrong: 0,
    submitted: false,
    answers: [],
    errorMessage: ""
  },
  action
) => {
  switch (action.type) {
    case "UPDATE_RESULT":
      state = {
        ...state,
        correct: action.payload.correct,
        wrong: action.payload.wrong,
        submitted: action.payload.submitted,
        errorMessage: action.payload.errorMsg
      };
      break;
    case "UPDATE_ANSWER":
      state = {
        ...state,
        answers: action.payload.updatedanswer,
        submitted: action.payload.submitted
      };
      break;

    case "CLEAR_DATA":
      state = {
        ...state,
        answers: action.payload.answers,
        correct: action.payload.correct,
        wrong: action.payload.wrong,
        submitted: action.payload.submitted
      };
      break;

    default:
      state = {
        ...state
      };
  }
  return state;
};

export default result;
