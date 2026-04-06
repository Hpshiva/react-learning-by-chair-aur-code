import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync, incrementByNumber } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-gray-600 w-full h-screen screen flex flex-col gap-5 text-center justify-center items-center">
        <h1 className="text-4xl text-white">
          Redux increment decrement incrementByNumber
        </h1>
        <p className="text-white text-4xl">{count}</p>

        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 py-3 px-[7rem]  rounded-full text-white"
        >
          Add 1
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-green-500 py-3 px-[7rem]  rounded-full text-white"
        >
          Reduce 1
        </button>
        <button
          onClick={() => dispatch(incrementByNumber(5))}
          className="bg-green-500 py-3 px-[7rem]  rounded-full text-white"
        >
          Add 5
        </button>
        <button
          onClick={() => dispatch(incrementAsync(5))}
          className="bg-green-500 py-3 px-[7rem]  rounded-full text-white"
        >
          Add 5 with Async
        </button>
      </div>
    </>
  );
}

export default Counter;
