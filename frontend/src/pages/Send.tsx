import { useSearchParams } from "react-router-dom"
import { Appbar } from "../components/Appbar"
import { SendComp } from "../components/SendComp";


export const Send = () => {
  const [searchParams] = useSearchParams()
  const toUserId = searchParams.get('userId');
  const toFirstName = searchParams.get('firstName');
  const toLastName = searchParams.get('lastName');

  return (
    <div className="h-screen w-screen flex flex-col p-5 justify-start place-items-center gap-28 bg-neutral-50">
      <Appbar />
      {
        toUserId && toFirstName && toLastName ?
        <SendComp toUserId={toUserId} toFirstName={toFirstName} toLastName={toLastName}/>
        : ""
      }
    </div>
  )
}
