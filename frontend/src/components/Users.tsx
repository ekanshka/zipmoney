import { useEffect, useState } from "react";
import { User } from "./User"
import axios from "axios";


export const Users = () => {

  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState([{username: "", firstName: "", lastName: "", userId: ""}]);


  const getUsers = () => {
    try {
      // const response = await axios.get("http://localhost:3000/api/v1/user/bulk" + "/?filter=" + searchInput, {
      //   headers: {
      //     Authorization: localStorage.getItem("authorization")
      //   }
      // })

      axios.get("http://localhost:3000/api/v1/user/bulk" + "/?filter=" + searchInput, {
        headers: {
          Authorization: localStorage.getItem("authorization")
        }
      }).then((response) => {
        // setUsers(response.data.users);
      })

    } catch (error) {
      console.log(error)
      return
    }
  }
  // getUsers();
  console.log(users)

  const keyDownSearch = (e:React.KeyboardEvent<HTMLInputElement>) => {
    setSearchInput(searchInput)
    if (e.key === 'Enter') {
      // setUsers(getUsers());
    }
  }

  useEffect(() => {
    // getUsers();
  }, [])



  return (
    <div className="w-[95%] p-5 flex flex-col gap-5 justify-around place-items-center rounded-2xl border">
      <div className="border-b p-2 rounded-md w-full px-4 text-lg font-semibold">Users</div>
      <input id="search" className="w-full bg-neutral-100 border rounded-lg px-3 py-2 " placeholder="Search users..." onKeyDown={keyDownSearch}/>
      {/* {users.map(user => <User user={user} />)} */}
    </div>
  )
}


