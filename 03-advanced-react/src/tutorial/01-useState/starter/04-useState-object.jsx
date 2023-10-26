//setup 3 state values
//render in browser
//btn, function, update all 3 values

import { useState } from "react";

// const People = [
//   {
//     name: "Peter",
//     age: 20,
//     hobby: "video-games",
//   },
// ];

const UseStateObject = () => {
  // const [name, setName] = useState("Peter");
  // const [age, setAge] = useState(28);
  // const [hobby, setHobby] = useState("video-games");

  const [person, setPerson] = useState({
    name: "peter",
    age: 30,
    hobby: "sss",
  });

  function changeBtn() {
    setPerson({ name: "sss", age: 43, hobby: "dd" });
  }

  return (
    <>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <p>{hobby}</p>
      <button onClick={changeBtn}>Change</button>
    </>
  );
};

export default UseStateObject;
