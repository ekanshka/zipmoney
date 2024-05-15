import { useEffect, useState } from "react";
import { User } from "./User";
import { useAllUsers } from "../hooks/useAllUsers";


export const Users = () => {
  const [searchInput, setSearchInput] = useState("");
  const [fetchedUsers, setFetchedUsers] = useState<IUser[] | null>(null);

  const { users, loading, fetchError} = useAllUsers(searchInput);

  
  useEffect(() => {
    if (users) {
      // let filteredUsers = users;
      // if (currentUser) {
      //   filteredUsers = users.filter(
      //     (user) => user.userId !== currentUser.userId
      //   );
      // }
      setFetchedUsers(fetchedUsers);
      
    }
    if (fetchError) {
      console.log("error searching for users")
    }
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
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      {loading
        ? "Loading..."
        : users?.map((user) => <User user={user} key={user.userId} />)}
    </div>
  );
};
