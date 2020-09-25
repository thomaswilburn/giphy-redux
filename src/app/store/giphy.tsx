// defines a set of middleware for accessing GIPHY

import { Dispatch } from 'react';
import { Action } from './types';

interface Parameters {
  [key: string]: any
}

const DEFAULT_PARAMS = {
  limit: 30,
  api_key: process.env["REACT_APP_GIPHY_KEY"]
}

var request = async function(method:string, params: Parameters = {}) {
  var url = new URL("https://api.giphy.com/v1/gifs/" + method);
  var merged:Record<string, any> = Object.assign({}, DEFAULT_PARAMS, params);
  for (var p in merged) {
    url.searchParams.set(p, (merged[p] as string));
  }
  var response = await fetch(url.toString());
  var json = await response.json();
  return json;
}

var addTrending = async function(dispatch: Dispatch<Action>, offset = 0) {
  dispatch({ type: "app:load-start" });

  var { data } = await request("trending", { offset });

  dispatch({ type: "stream:append", payload: data });
  dispatch({ type: "app:load-end" });
}

var addSearch = async function(dispatch: Dispatch<Action>, q: string, offset = 0) {
  dispatch({ type: "app:load-start" });

  var { data } = await request("search", { q, offset });

  dispatch({ type: "stream:append", payload: data });
  dispatch({ type: "app:load-end" });
}

var giphyMiddleware = function(store: any) {
  return function(dispatch: Dispatch<Action>) {
    return function(action: Action) {
      var state = store.getState();
      if (state.app.loading) {
        return dispatch(action);
      }

      switch (action.type) {

        case "giphy:search":
          return addSearch(dispatch, state.app.query, state.stream.images.length);

        case "giphy:trending":
          return addTrending(dispatch, state.stream.images.length);

        case "giphy:continue":
          if (state.app.query) {
            return addSearch(dispatch, state.app.query, state.stream.images.length);
          }
          return addTrending(dispatch, state.stream.images.length);

      }

      return dispatch(action);
    }
  }
}

export default giphyMiddleware;