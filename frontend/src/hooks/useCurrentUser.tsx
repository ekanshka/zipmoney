import axios from "axios";
import { useEffect, useState } from "react";

export const useCurrentUser = () => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    userId: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user", {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
      })
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return user;
};
