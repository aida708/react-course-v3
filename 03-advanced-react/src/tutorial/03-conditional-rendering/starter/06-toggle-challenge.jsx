import { useState } from "react";

const ToggleChallenge = () => {
  const [isOpen, setisOpen] = useState(false);

  // const handleClick = () => {
  //   // setisOpen(!isOpen);
  //   if (isOpen) {
  //     isOpen(false);
  //     return;
  //   }
  //   setisOpen(true);
  // };

  return (
    <div>
      <button onClick={() => setisOpen(!isOpen)} className="btn">
        KLIKO KETU
      </button>
      {isOpen && <Alert />}
    </div>
  );
};

function Alert() {
  return <div className="alert alert-danger">hello Aida </div>;
}

export default ToggleChallenge;
