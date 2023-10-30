// the initial render is the first time that the comp tree is rendered t

import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)} className="btn">
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  // useEffect(() => {
  //   console.log("this is interesting");
  //   const intId = setInterval(() => {
  //     console.log("hello from interval");
  //   }, 1000);

  //   return () => {
  //     clearInterval(intId);               //clean up function
  //   };
  // }, []);

  useEffect(() => {
    const someFunc = () => {
      //some logic
      console.log("yeahh");
    };
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);

  return <h3>hello there</h3>;
};

export default CleanupFunction;
