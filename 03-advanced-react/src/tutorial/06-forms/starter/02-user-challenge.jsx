import { data } from "../../../data";
import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(data);

  const handleSubmit = (e) => {

    e.preventDefault();
    const newUser(name);
    setUser(...data, newUser )
  }


  return (
    <div>
      <form className="form">
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h4>Add a new User</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-input"
          id="name"
          placeholder="name"
          onSubmit={handleSubmit}
        />
      </div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.name}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
