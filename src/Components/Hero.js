import React, { useEffect, useState } from "react";

const Hero = () => {
  // const [count, setCount] = useState(0);
  const [back, setBack] = useState("teal");

  const handleBack = () => {
    if (back === "teal") {
      setBack("purple");
    }
    if (back === "purple") {
      setBack("teal");
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = back;
    if (back === "teal") {
      document.title = "teal"
      
    } else {
      document.title = "purple"
    }
  });
  //   const handledec = () => {
  //     setCount(count - 1);
  //   };

  //   const handleInc = () => {
  //     setCount(count + 1);
  //   };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((prevCount) => {
  //       if (prevCount >= 5) {
  //         return 0;
  //       } else {
  //         return prevCount + 1;
  //       }
  //     });
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [count]);
  return (
    <>
      {/* <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      <button onClick={handleBack}>Click Mee</button>
    </>
  );
};

export default Hero;
