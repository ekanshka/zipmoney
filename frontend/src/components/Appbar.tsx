import { ProfileButton } from "./ProfileButton";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";



export const Appbar = () => {

  const currentUser = useCurrentUser();


  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authorization');
    alert('successfully signed out')
    navigate('/signin');
  }

  const userPage = () => {
    navigate('/user');
  }

  return (
    // title    hello user-initials-button
     
    <div className="w-[95%] md:px-10 px-7 py-3 flex justify-between place-items-center border-2 rounded-2xl shadow-md border-slate-600">
      <h2 className="font-bold text-2xl md:text-3xl">PayTM App</h2>
      <div className="flex justify-center place-items-center gap-5">
        <span className="font-bold text-xl md:text-2xl hidden sm:block">Hello</span>
        <ProfileButton onClick={userPage} user={currentUser}/>
        <button className="bg-red-700 shadow-md text-white px-3 py-2 rounded-xl text-sm sm:text-base md:text-lg" onClick={handleLogout}>LogOut</button>
      </div>
    </div>
  );
};
