import { Button } from "../components/Button";
import { useCurrentUser } from "../hooks/useCurrentUser"


export const User = () => {

  const currentUser = useCurrentUser();

  return (
    <div className="h-screen w-screen flex flex-col p-5 justify-center place-items-center gap-5 bg-neutral-50">
      <div className="">
        <div>{currentUser.username}</div>
        <div>{currentUser.firstName}</div>
        <div>{currentUser.lastName}</div>
        <div>{currentUser.userId}</div>
        <Button>Update Details</Button>
        <Button>Delete Account</Button>
        <dialog></dialog>
      </div>
    </div>
  )
}
