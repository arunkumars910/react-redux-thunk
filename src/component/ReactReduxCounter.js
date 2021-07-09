import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  POP,
  PUSH,
  SET_DATA,
} from "../store";

const ReactReduxCounter = (props) => {
  // const [data, setData] = useState({});

  // const getData = () => {
  //   axios.get(`https://jsonplaceholder.typicode.com/posts`).then((result) => {
  //     console.log("Data fetched", result.data);
  //     props.setData(result.data);
  //   });
  // };

  const removeData = () => {
    props.removeData();
  };

  return (
    <div>
      <h1>Count is - {props.count}</h1>
      <h1>Lenth of the Array - {props.test.length}</h1>
      <button onClick={props.increment}>increment</button>
      <button onClick={props.decrement}>decrement</button>
      <button onClick={props.push}>push</button>
      <button onClick={props.pop}>pop</button>
      {/* <button onClick={getData}>getData</button> */}
      <button onClick={props.setData}>getData</button>
      <button onClick={removeData}>removeData</button>
      {props.data.length > 0 &&
        props.data.map((x, i) => <div key={i}>{x.title}</div>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    test: state.tester,
    data: state.storage.data || [],
  };
};

//Thunk
const thunkGetDataFun = (status) => {
  return (dispatch, getState) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((result) => {
      console.log(status,getState());
      console.log("Data fetched", result.data);
      dispatch({ type: SET_DATA, data: result.data });
    });
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: COUNTER_INCREMENT });
    },
    decrement: () => {
      dispatch({ type: COUNTER_DECREMENT });
    },
    push: () => {
      dispatch({ type: PUSH, value: Math.random() });
    },
    pop: () => {
      dispatch({ type: POP });
    },
    setData: (result) => {
      dispatch(thunkGetDataFun("Thunk function called"));
    },
    removeData: () => {
      console.log("inside remove");
      dispatch({ type: "removeData" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxCounter);
