// import redux
const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    };
  } else if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

// store
const store = createStore(rootReducer);
console.log(store.getState());

// subscription
// subscribe method comes as soon as store is created. so that i can be notified about
// future store changes
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// dispatch action
store.dispatch({ type: "INCREMENT_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 5 });
console.log(store.getState());
