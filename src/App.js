import React, { useReducer } from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import reducer from "./reducer"

const initialValue = 0;

const ReducerHook = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <Wrapper>
        <div className="container">
          <Button variant="contained" onClick={() => dispatch({ type: "INC" })}>
            Increment
          </Button>
          <h1>{count}</h1>
          <Button variant="contained" onClick={() => dispatch({ type: "DEC" })}>
            Decrement
          </Button>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  }

  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`;

export default ReducerHook;
