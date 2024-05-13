import { useEffect, useState } from "react"


export const Balance = () => {

  const [balance, setBalance] = useState()

  useEffect

  return (
    <div className="w-[95%] p-4 rounded-2xl border font-semibold">
      Your Balance
      <span>{balance}</span>
    </div>
  )
}
