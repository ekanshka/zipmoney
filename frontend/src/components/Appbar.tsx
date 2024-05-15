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

  const handleLogout = () => {
    localStorage.removeItem('authorization');
    alert('successfully signed out')
    navigate('/signin');
  }


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
     
    <div className="w-[95%] md:px-10 px-7 py-3 flex justify-between place-items-center border-2 rounded-2xl shadow-md border-slate-600">
      <h2 className="font-bold text-2xl md:text-3xl">PayTM App</h2>
      <div className="flex justify-center place-items-center gap-5">
        <span className="font-bold text-xl md:text-2xl hidden sm:block">Hello</span>
        <ProfileButton onClick={userPage} user={user}/>
        <button className="bg-red-700 shadow-md text-white px-3 py-2 rounded-xl text-sm sm:text-base md:text-lg" onClick={handleLogout}>LogOut</button>
      </div>
    </div>
  );
};
