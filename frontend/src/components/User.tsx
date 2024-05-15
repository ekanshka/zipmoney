
import { useNavigate } from "react-router-dom"
import { ProfileButton } from "./ProfileButton"


interface IUser {
  user: {
    username: string,
    firstName: string,
    lastName: string,
    userId: string
  }
}

export const User = ({user}: IUser) => {

  const navigate = useNavigate()

  const handleSend = () => {
    navigate('/send')
  }

  return (
    <div className="flex justify-between place-items-center w-full rounded-lg border shadow-sm md:px-10 py-5 px-4">
      <div className="flex justify-center place-items-center gap-2">
        <ProfileButton user={user}/>
        <span className=" md:text-lg">{user.firstName}</span>
        <span className=" md:text-lg">{user.lastName}</span>
      </div>

      <div className="">
        <button className="bg-slate-950 text-white py-2 px-3 rounded-lg shadow-lg md:text-lg text-sm" onClick={handleSend}>Send Money</button>
      </div>
    </div>
  )
}
