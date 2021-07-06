import React, { useState } from "react";
import store, { COUNTER_DECREMENT, COUNTER_INCREMENT, POP, PUSH } from "../store";

function Counter() {
  
  const increment = () => {
    store.dispatch({ type: COUNTER_INCREMENT });
    console.log(store.getState());
  };

  const decrement = () => {
    store.dispatch({ type: COUNTER_DECREMENT });
    console.log(store.getState());
  };

  const push = () => {
    store.dispatch({ type: PUSH , value: Math.random()});
    console.log(store.getState());
  };

  const pop = () => {
    store.dispatch({ type: POP  });
    console.log(store.getState());
  };

  return (
    <div>
      {}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={push}>push</button>
      <button onClick={pop}>pop</button>
    </div>
  );
}

export default Counter;
