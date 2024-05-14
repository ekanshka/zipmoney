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
    <button className="bg-slate-950 text-white text-center text-lg p-3 h-12 w-12 rounded-full" onClick={onClick}>{initials}</button>
  )
}
