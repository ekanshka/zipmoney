import axios from "axios";
import { useEffect, useState } from "react"


export const Balance = () => {

  const [balance, setBalance] = useState("");

  const getBalance = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
      headers: {
        Authorization: localStorage.getItem("authorization")
      }
    })

    if (response.data.balance) {
      setBalance(response.data.balance);
    } 
  }

  useEffect(() => {
    getBalance();
  }, [balance])



  useEffect

  return (
    <div className="w-[95%] p-4 rounded-2xl border font-bold">
      <span>Your Balance </span>
      <span className="ml-4 font-semibold">Rs. {balance}</span>
    </div>
  )
}
