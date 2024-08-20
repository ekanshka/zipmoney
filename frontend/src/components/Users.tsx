import { useEffect, useState } from "react";
import { User } from "./User";
import { useAllUsers } from "../hooks/useAllUsers";
import { useCurrentUser } from "../hooks/useCurrentUser";

export const Users = () => {
  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState<IUser[] | null>(null);

  const { fetchedUsers, loading, fetchError } = useAllUsers(searchInput);
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    if (fetchedUsers && currentUser) {
      const filteredUsers = fetchedUsers.filter(
        (user) => user.userId !== currentUser.userId
      );
      setUsers((prevUsers) => {
        // Only update if the filtered users are different from the previous state
        if (JSON.stringify(prevUsers) !== JSON.stringify(filteredUsers)) {
          return filteredUsers;
        }
        return prevUsers;
      });
    }
    if (fetchError) {
      alert(fetchError);
    }
  }, [fetchedUsers, fetchError, currentUser]);

  return (
    <section className="w-[95%] p-5 flex flex-col gap-5 justify-around place-items-center rounded-2xl border shadow-md ">
      <div className="border-b p-2 rounded-md w-full px-4 text-2xl font-semibold">
        Users
      </div>
      <input
        id="search"
        className="w-full bg-neutral-100 border rounded-lg px-3 py-2 shadow-sm text-sm sm:text-base md:text-lg"
        placeholder="Search users... (case sensitive)"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      {loading
        ? "Loading..."
        : users?.map((user) => <User user={user} key={user.userId} />)}
    </section>
  );
};
