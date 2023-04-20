import React, { useMemo, useState } from "react";
import styled from "styled-components";

function MemoHook() {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    console.log("Count : ", num);
    for (let i = 0; i <= 100000; i++) {} //just to slow the application
    return num;
  };

  const CheckData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);

  return (
    <Wrapper>
      <button onClick={getValue} style={{ backgroundColor: "orange" }}>
        Counter
      </button>
      <p>My new number : {CheckData} </p>
      <button onClick={() => setShow(!show)}>
        {show ? "You clicked me" : "Please click me"}
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2.4rem;
`;

export default MemoHook;
