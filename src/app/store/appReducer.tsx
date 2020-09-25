import { Action } from './types';

export default function(state: object, action: Action) {
  switch (action.type) {

    case "app:load-start":
      return {
        ...state,
        loading: true
      }

    case "app:load-end":
      return {
        ...state,
        loading: false
      }

    case "search:query":
      return {
        ...state,
        query: action.payload
      }

    case "search:clear":
      return {
        ...state,
        search: ""
      }

  }
  return state || {
    loading: false,
    query: ""
  };
}