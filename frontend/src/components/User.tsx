
import { useNavigate } from "react-router-dom"
import { ProfileButton } from "./ui/ProfileButton"
import { Button } from "./ui/Button"
import { useState } from "react"

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
  const [loading, setLoading ] = useState(false)

  const handleSend = () => {
    setLoading(true)
    navigate(`/send/?userId=${user.userId}&firstName=${user.firstName}&lastName=${user.lastName}`)
    setLoading(false)
  }

  return (
    <div className="flex justify-between place-items-center w-full rounded-lg border shadow-sm md:px-10 py-5 px-4 text-sm sm:text-base md:text-lg">
      <div className="flex justify-center place-items-center gap-2">
        <ProfileButton user={user}/>
        <span className=" md:text-lg">{user.firstName}</span>
        <span className=" md:text-lg">{user.lastName}</span>
      </div>

      <Button onClick={handleSend} loading={loading}>Pay</Button>
    </div>
  )
}
