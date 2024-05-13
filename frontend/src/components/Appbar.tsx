import axios from "axios";
import { useEffect, useState } from "react";
import { ProfileButton } from "./ProfileButton";
import { useNavigate } from "react-router-dom";

export const Appbar = () => {

  const [ initials, setInitials ] = useState("U");
  const navigate = useNavigate();

  const getUserData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/user", {
        headers: {
          Authorization: localStorage.getItem('authorization')
        }
      })
      
      const { firstName, lastName } = response.data.user;

      const firstInitial = firstName[0];
      const lastInitial = lastName[0];
      const fullInitial = firstInitial + lastInitial;

  
      setInitials(fullInitial.toUpperCase())
    } catch (error) {
      console.log(error)
      return;
    }
  }

  useEffect(() => {
    getUserData();
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
        <ProfileButton onClick={userPage} initials={initials}/>
      </div>
    </div>
  );
};
