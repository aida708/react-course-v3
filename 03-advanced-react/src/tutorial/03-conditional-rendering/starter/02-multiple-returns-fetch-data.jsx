import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        //get the response
        const response = await fetch(url);
        const user = await response.json();
        console.log(user);
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      const {(name, avatar_url, id)} = user;
      <img src={avatar_url} />
      <h1>{name}</h1>
    </>
  );
};
export default MultipleReturnsFetchData;
