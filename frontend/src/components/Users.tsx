import { useEffect, useState } from "react";
import { User } from "./User"
import axios from "axios";


export const Users = () => {

  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState([]);


  useEffect(() => {
      axios.get("http://localhost:3000/api/v1/user/bulk/?filter=" + searchInput, {
        headers: {
          Authorization: localStorage.getItem("authorization")
        }
      }).then((response) => {
        setUsers(response.data.users);
      }).catch((error) => {
        console.log(error)
        alert(error.message)
      })
      
  }, [searchInput])




  return (
    <div className="w-[95%] p-5 flex flex-col gap-5 justify-around place-items-center rounded-2xl border">
      <div className="border-b p-2 rounded-md w-full px-4 text-2xl font-semibold">Users</div>
      <input id="search" className="w-full bg-neutral-100 border rounded-lg px-3 py-2 " placeholder="Search users..." onChange={(e) => {setSearchInput(e.target.value)}}/>
      {/* @ts-ignore */}
      {users? users.map(user => <User user={user} key={user.userId}/>) : ""}
    </div>
  )
}


