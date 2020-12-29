import {
  SET_ANSWERS,
  SET_CURRENT_QUESTION,
  SET_CURRENT_ANSWER,
  SHOW_RESULTS,
  NEXT_QUESTION,
  PREV_QUESTION,
} from './actionTypes';

function quizReducer(state, action) {
  switch (action.type) {
    case SET_CURRENT_ANSWER:
      return {
        ...state,
        currentAnswer: action.currentAnswer,
      };
    case SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.currentQuestion,
      };
    case SHOW_RESULTS:
      return {
        ...state,
        showResults: action.showResults,
      };
    case SET_ANSWERS:
      return {
        ...state,
        answers: [...state.answers, action.answer],
      };
    case NEXT_QUESTION:
      return {
        ...state,
        currentQuestion: action.currentQuestion + 1,
      };
    case PREV_QUESTION:
      return {
        ...state,
        currentQuestion: action.currentQuestion - 1 >= 0 ? action.currentQuestion - 1 : 0,
      };
    default:
      return state;
  }
}

export default quizReducer;
