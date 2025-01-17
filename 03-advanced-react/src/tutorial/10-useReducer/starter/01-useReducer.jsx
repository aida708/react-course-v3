import React, { useReducer } from "react";
import { data } from "../../../data";

const defaultState = {
  people: data,
};

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }

  // return state;
  throw new Error(`No matching "${action.type}" - action type`);
};

const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_LIST = "REMOVE_LIST";

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const resetList = () => {
    // setPeople(data);
    dispatch({ type: RESET_LIST });
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length > 0 ? (
        <button
          onClick={clearList}
          className="btn"
          style={{ marginTop: "2rem" }}
        >
          Clear{" "}
        </button>
      ) : (
        <button
          onClick={resetList}
          className="btn"
          style={{ marginTop: "2rem" }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
