import React from "react";
import { useState } from "react";
import { data } from "../../../data";

export default function UseStateArray() {
  const [item, setItem] = useState(data);

  // const UseStateArray = () => {
  //   const [item, setItem] = React.useState(data);

  const handleRemove = (id) => {
    const newPeople = item.filter((item) => item.id !== id);
    setItem(newPeople);
  };

  return (
    <div>
      {item.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h2>{name}</h2>
            <button onClick={() => handleRemove(id)}>Remove</button>
          </div>
        );
      })}
      <button onClick={() => setItem([])} style={{ marginTop: "2rem" }}>
        Clear List
      </button>
    </div>
  );
}

// export default UseStateArray;
