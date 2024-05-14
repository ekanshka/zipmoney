import axios from "axios";
import { useEffect, useState } from "react";
import { ProfileButton } from "./ProfileButton";
import { useNavigate } from "react-router-dom";

interface IUser {

  username: string,
  firstName: string,
  lastName: string,
  userId: string
}

export const Appbar = () => {

  const [ user, setUser ] = useState({username: "",
    firstName: "",
    lastName: "",
    userId: ""});


  const navigate = useNavigate();


  useEffect(() => {
      axios.get("http://localhost:3000/api/v1/user", {
        headers: {
          Authorization: localStorage.getItem('authorization')
        }
      }).then((response) => {
        setUser(response.data.user)
      }).catch((error) => {
        console.log(error)
      })
  }, [])


  const userPage = () => {
    navigate('/user');
  }

  return (
    // title    hello user-initials-button
     
    <div className="w-[95%] p-3 flex justify-around place-items-center border-4 rounded-2xl border-slate-600">
      <h2 className="font-bold text-3xl">PayTM App</h2>
      <div className="flex justify-center place-items-center gap-5">
        <span className="font-bold text-2xl">Hello</span>
        <ProfileButton onClick={userPage} user={user}/>
      </div>
    </div>
  );
};
