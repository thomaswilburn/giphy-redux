import { configureStore } from '@reduxjs/toolkit';
import giphy from './store/giphy.tsx';
console.log(giphy);

const preloadedState = {
  gifs: [],
  loading: false
};

export default configureStore({
  preloadedState,
  middleware: [ giphy ],
  reducer: function(state, action) {
    console.log(action);
    switch (action.type) {
      case "CLEAR":
        return Object.assign({}, preloadedState);

      case "LOADING":
        return {
          ...state,
          loading: true
        };
        break;

      case "APPEND":
        return {
          ...state,
          gifs: [].concat(state.gifs, action.payload),
          loading: false
        };
        break;

      case "SEARCH":
        // run GIPHY search
        break;

      default:
        return state;
    }
  }
});
