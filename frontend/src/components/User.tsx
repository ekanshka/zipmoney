import { useState } from "react";
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

  const [initials, setInitials] = useState("")
  const firstInitial = user.firstName[0];
  const lastInitial = user.lastName[0];
  const fullInitial = firstInitial + lastInitial;


  setInitials(fullInitial.toUpperCase())

  return (
    <div>
      <div className="">
        <ProfileButton initials={initials}/>
        <span className="">{user.firstName}</span>
        <span className="">{user.lastName}</span>
      </div>
    </div>
  )
}
