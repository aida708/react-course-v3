import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // code to authenticate user and get the user info
    //normally connect to db or api
    setUser({ name: "aida sufaj" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            Log out
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login!</h4>
          <button className="btn" onClick={login}>
            Log in
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;

//create state value
// --user -- default value null]
// create 2 functions
// login --set user  equal to object with name property
// logout-- set user to null
// in jsx use ? to display 2 diff setups

// - h4 with "hello there, user name" and logout button
// - h4 with "please login " and login button
