import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"


export const Dashboard = () => {
  
  return (
    <div className="h-screen w-screen flex flex-col p-5 place-items-center gap-5 bg-neutral-50">
      <Appbar />
      <Balance />
      <Users />
    </div>
  )
}
