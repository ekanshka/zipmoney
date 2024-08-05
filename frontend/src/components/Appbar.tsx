import { ProfileButton } from "./ProfileButton";
import { Link, useNavigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { DangerButton } from "./DangerButton";
import { IoLogoGithub } from "react-icons/io";



export const Appbar = () => {

  const {currentUser} = useCurrentUser();

  

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authorization');
    alert('successfully signed out')
    navigate('/signin');
  }

  const userPage = () => {
    navigate('/user');
  }
  const redirectDashboard = () => {
    navigate('/dashboard');
  }
  
  return (
     
    <nav className="w-[95%] md:px-10 px-7 py-3 flex justify-between place-items-center border-2 rounded-2xl shadow-md border-slate-600 ">
      <h2 className="font-bold text-xl md:text-3xl cursor-pointer" onClick={redirectDashboard}>ZipMoney</h2>
      <div className="flex justify-center place-items-center md:gap-5 gap-2">
        <Link to='https://github.com/ekanshka/week-4-paytm-mern' target="_blank">
          <IoLogoGithub size={30} className="cursor-pointer"/>
        </Link>
        <span className="font-bold text-xl md:text-2xl hidden sm:block">Hello</span>
        <ProfileButton onClick={userPage} user={currentUser}/>
        <DangerButton onClick={handleLogout}>LogOut</DangerButton>
      </div>
    </nav>
  );
};
