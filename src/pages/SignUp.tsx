import React from "react";
// import { useDispatch } from "react-redux";

// import { useAppSelector } from "../redux/countHook.ts";
// import { increment, decrement } from "../redux/countSlice.ts";
import SignUpSquare from "../components/SignUpSquare.tsx";

function SignUp() {
  // const count = useAppSelector((state) => state.counter.count);
  // const dispatch = useDispatch();

  // function handleIncrement() {
  //   // dispatch(increment());
  // }

  // function handleDecrement() {
  //   // dispatch(decrement());
  // }

  return (
    <>
      <SignUpSquare></SignUpSquare>
      {/* <div>
        <p>Contador: {count}</p>
        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={handleDecrement}>Decrementar</button>
      </div> */}
    </>
  );
}

export default SignUp;