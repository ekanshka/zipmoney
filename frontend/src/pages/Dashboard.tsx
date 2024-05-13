import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"


export const Dashboard = () => {
  return (
    <div className="h-screen w-screen flex flex-col place-items-center">
      <Appbar />
      <Balance />
      <Users />
    </div>
  )
}
