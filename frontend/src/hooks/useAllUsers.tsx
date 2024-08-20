
import axios from "axios";
import { useEffect, useState } from "react";

export const useAllUsers = (searchInput: string) => {
  const [fetchedUsers, setFetchedUsers] = useState<IUser[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://week-4-paytm-mern.onrender.com/api/v1/user/bulk/?filter=" + searchInput, {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
      })
      .then((response) => {
        setFetchError(null);
        setFetchedUsers(response.data.users);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          if ((error.response.status !== 401) && (error.response.status !== 403)) {
            setFetchError(error.response.data.msg);
          }
        } else {
          setFetchError(error.message);
        }
        setLoading(false);
      });
  }, [searchInput]);

  return { fetchedUsers, loading, fetchError };
};
