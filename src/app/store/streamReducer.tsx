import { Image, Action } from './types';

declare interface Stream {
  images: Array<Image>
}

export default function(state: Stream, action: Action) {
  switch (action.type) {
    case "search:query":
    case "search:clear":
      return {
        ...state,
        images: []
      };

    case "stream:append":
      return {
        ...state,
        images: [...state.images, ...action.payload]
      };
  }
  return state || {
    images: []
  };
}