import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        //get the response
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        setIsError;
        const user = await response.json();
        console.log(user);
        setUser(user);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h1>Somet hing went wrong...</h1>;
  }

  const { avatar_url, name, company, bio } = user;

  return (
    <div>
      <img src={avatar_url} style={{ width: "150px", borderRadius: "25px" }} />
      <h2>{name}</h2>
      <h4>Works at:{company} </h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;

//data fetching:  3 options
//1- loading -- waiiting   for data to arrive (display loading state)
//2- error -- there was an err-- display error message
//3- sucess - received data (display data)
