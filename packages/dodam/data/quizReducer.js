import {
  SET_ANSWERS,
  SET_CURRENT_QUESTION,
  SET_CURRENT_ANSWER,
  SHOW_RESULTS,
  NEXT_QUESTION,
  PREV_QUESTION,
  SUBMIT_ANSWER,
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
        currentQuestion:
          state.currentQuestion + 1 < state.questions.length ? state.currentQuestion + 1 : state.currentQuestion,
      };
    case PREV_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion - 1 >= 0 ? state.currentQuestion - 1 : 0,
        currentAnswer: action.currentAnswer,
      };
    case SUBMIT_ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.answer],
        currentAnswer: '',
      };
    default:
      return state;
  }
}

export default quizReducer;
