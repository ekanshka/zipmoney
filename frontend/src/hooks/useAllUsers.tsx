// import axios from "axios";
// import { useEffect, useState } from "react";

// export const useAllUsers = (searchInput: string) => {
//   const [users, setUsers] = useState<IUser[] | null>(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/v1/user/bulk/?filter=" + searchInput ,  {
//         headers: {
//           Authorization: localStorage.getItem("authorization"),
//         },
//       })
//       .then((response) => {
//         // setTimeout(() => {                        //artificial latency to show loading screen
//         // }, 500);
//         console.log('response good')
//         setUsers(response.data.users);
//       })
//       .catch((error) => {
//         if (error.response) {
//           console.log('response bad')
//           alert(error.response.data.msg);
//         } else {
//           console.log('response very bad')
//           alert(error.message);
//         }
//       });
//   }, [searchInput]);
//   return users;
// };

import axios from "axios";
import { useEffect, useState } from "react";

export const useAllUsers = (searchInput: string) => {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/api/v1/user/bulk/?filter=" + searchInput, {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
      })
      .then((response) => {
        setFetchError(null);
        setUsers(response.data.users);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          setFetchError(error.response.data.msg);
        } else {
          setFetchError(error.message);
        }
        setLoading(false);
      });
  }, [searchInput]);

  return { users, loading, fetchError };
};
