import * as redux from "redux";

export const COUNTER_INCREMENT = "COUNTER_INCREMENT";
export const COUNTER_DECREMENT = "COUNTER_DECREMENT";
export const PUSH = "PUSH";
export const POP = "POP";

const initialState = {
  count: 0,
  isloading: false,
  username: "",
  password: "",
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case COUNTER_DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

const testerReducer = (state = [], action) => {
  switch (action.type) {
    case PUSH:
      const data_push = [...state];
      data_push.push(action.value);
      return [...data_push];

    case POP:
      const data_pop = [...state];
      data_pop.pop();
      return [...data_pop];

    default:
      return state;
  }
};

const dataReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "setData":
      return { data: action.data };

    case "removeData":
      return { data: null };

    default:
      return state;
  }
};

// const rootReducer = (state = {}, action) => {
//   return {
//     counter: counterReducer(state.counter, action),
//     tester: testerReducer(state.tester, action),
//     storage: dataReducer(state.storage, action),
//   };
// };

const rootReducer = redux.combineReducers({
  counter: counterReducer,
  tester: testerReducer,
  storage: dataReducer,
});

const store = redux.createStore(rootReducer);
export default store;
