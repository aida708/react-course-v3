import { useState } from "react";

const ShortCircuitOverview = () => {
  //FALSY
  const [text, setText] = useState("");
  //TRUTHY
  const [name, setName] = useState("susan");

  const codeEx = text || "hello ";

  return (
    <div>
      <h4>Falsy OR : {text || "hello AIDA"}</h4>
      <h4>Falsy AND : {text && "hello AIDA"}</h4>
      <h4>Truthy OR : {text || "hello AIDA"}</h4>
      <h4>TRUTHY AND : {text || "hello AIDA"}</h4>
      {codeEx}
    </div>
  );
};
export default ShortCircuitOverview;

//
