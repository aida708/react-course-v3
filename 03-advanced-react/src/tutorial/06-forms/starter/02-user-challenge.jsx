import { data } from "../../../data";
import { useState } from "react";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    // console.log(fakeId);
    //if value, setup new user and add to currnet users
    const newUser = { id: fakeId, name: name };
    const updatedUser = [...users, newUser];
    setUsers(updatedUser);
    setName("");
  };

  const removeUser = (id) => {
    const removeUser = users.filter((person) => person.id !== id);
    setUsers(removeUser);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>Users</h2>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button onClick={() => removeUser(user.id)} className="btn">
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
