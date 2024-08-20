import axios from "axios";
import { useEffect, useState } from "react";

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    userId: "",
  });

  const [fetchError, setFetchError] = useState<string | null>()

  useEffect(() => {
    axios
      .get("https://week-4-paytm-mern.onrender.com/api/v1/user", {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
      })
      .then((response) => {
        setFetchError(null)
        setCurrentUser(response.data.user);
      })
      .catch((error) => {
        if (error.response) {
          if ((error.response.status !== 401) && (error.response.status !== 403)) {
            setFetchError(error.response.data.msg);
          }
        } else {
          setFetchError(error.message)
        }
      });
  }, []);
  // console.log(fetchError)
  return {currentUser, fetchError};
};
