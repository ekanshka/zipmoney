import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    userId: "",
  });

  const [fetchError, setFetchError] = useState<AxiosError>()

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user", {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
      })
      .then((response) => {
        setCurrentUser(response.data.user);
      })
      .catch((error) => {
        if (error.response) {
          setFetchError(error.response.data.msg);
        } else {
          setFetchError(error.message)
        }
      });
  }, []);
  // console.log(fetchError)
  return {currentUser, fetchError};
};
