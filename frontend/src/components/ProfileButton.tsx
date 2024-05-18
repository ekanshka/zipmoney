import { useEffect, useState } from "react";

interface Iprops {
  user: {
    username: string,
    firstName: string,
    lastName: string,
    userId: string
  },
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const ProfileButton = ({user, onClick}: Iprops) => {

  const [initials, setInitials] = useState("")
  
  useEffect(() => {
    if (user.firstName && user.lastName) {
      const firstInitial = user.firstName[0].toUpperCase();
      const lastInitial = user.lastName[0].toUpperCase();
      const fullInitial = firstInitial + lastInitial;
      setInitials(fullInitial)
    }
  }, [user])


  return (
    <button className="bg-slate-600 text-white flex justify-center place-items-center text-sm md:text-lg p-3 h-10 w-10 md:h-12 md:w-12 rounded-full shadow-md ease-in-out duration-300 hover:scale-105" onClick={onClick}>{initials}</button>
  )
}
