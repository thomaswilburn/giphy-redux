// defines a set of middleware for accessing GIPHY

var request = async function(endpoint, params = {}) {
  var url = new URL("https://api.giphy.com/v1/gifs/" + endpoint);
  url.searchParams.set("api_key", process.env.REACT_APP_GIPHY_KEY);
  for (var p in params) {
    url.searchParams.set(p, params[p]);
  }
  var response = await fetch(url.toString());
  var json = await response.json();
  return json;
}

var addTrending = async function(dispatch, limit = 10, offset = 0) {
  dispatch({ type: "LOADING"});

  var data = await request("trending", { limit, offset });

  dispatch({ type: "APPEND", payload: data.data });
}

var giphyMiddleware = function(store) {
  return dispatch => action => {
    var state = store.getState();

    switch (action.type) {
      case "LOAD_TRENDING":
        return addTrending(dispatch, 40, state.gifs.length);
    }
    return dispatch(action);
  }
}

export default giphyMiddleware;