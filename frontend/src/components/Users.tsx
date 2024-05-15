import { useEffect, useState } from "react";
import { User } from "./User";
import axios from "axios";

interface IUser {
  username: string;
  firstName: string;
  lastName: string;
  userId: string;
}

export const Users = () => {
  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk/?filter=" + searchInput, {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
      })
      .then((response) => {
        setTimeout(() => {                        //artificial latency to show loading screen
          setUsers(response.data.users);
          setLoading(false)
        }, 500);
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.msg);
        } else {
          alert(error.message);
        }
      });
  }, [searchInput]);

  return (
    <div className="w-[95%] p-5 flex flex-col gap-5 justify-around place-items-center rounded-2xl border shadow-md">
      <div className="border-b p-2 rounded-md w-full px-4 text-2xl font-semibold">
        Users
      </div>
      <input
        id="search"
        className="w-full bg-neutral-100 border rounded-lg px-3 py-2 shadow-sm"
        placeholder="Search users..."
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      {loading ? "Loading..." : users?.map((user) => <User user={user} key={user.userId} />)}
    </div>
  );
};
