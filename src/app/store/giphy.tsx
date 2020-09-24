// defines a set of middleware for accessing GIPHY

import { Dispatch } from 'react';
import { Action } from './types';

interface Parameters {
  [key: string]: any
}

var request = async function(method:string, params: Parameters = {}) {
  var url = new URL("https://api.giphy.com/v1/gifs/" + method);
  url.searchParams.set("api_key", (process.env["REACT_APP_GIPHY_KEY"] as string));
  for (var p in params) {
    url.searchParams.set(p, params[p]);
  }
  var response = await fetch(url.toString());
  var json = await response.json();
  return json;
}

var addTrending = async function(dispatch: Dispatch<Action>, limit = 10, offset = 0) {
  dispatch({ type: "LOADING"});

  var data = await request("trending", { limit, offset });

  dispatch({ type: "APPEND", payload: data.data });
}

var addSearch = async function(dispatch: Dispatch<Action>) {

}

var giphyMiddleware = function(store: any) {
  return function(dispatch: Dispatch<Action>) {
    return function(action: Action) {
      var state = store.getState();

      switch (action.type) {
        case "LOAD_TRENDING":
          return addTrending(dispatch, 40, state.gifs.length);
      }
      return dispatch(action);
    }
  }
}

export default giphyMiddleware;