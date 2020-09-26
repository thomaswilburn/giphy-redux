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

    case "app:preview":
      return {
        ...state,
        preview: action.payload.images.original.url
      };

    case "app:preview-close":
      return {
        ...state,
        preview: null
      };

  }
  return state || {
    loading: false,
    query: "",
    preview: null
  };
}