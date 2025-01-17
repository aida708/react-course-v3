import React from "react";
import { people } from "../../../data";
import { Person } from "./Person";

export default function List() {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.name} {...person} />;
      })}
    </div>
  );
}
