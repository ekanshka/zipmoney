import axios from "axios";
import { useEffect, useState } from "react"


export const Balance = () => {

  const [balance, setBalance] = useState("");

  const getBalance = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          Authorization: localStorage.getItem("authorization")
        }
      })
  
      if (response.data.balance) {
        setBalance(response.data.balance);
      }
    } catch (error) {
      console.log(error)
      return
    } 
  }

  useEffect(() => {
    getBalance();
  }, [balance])



  useEffect

  return (
    <div className="w-[95%] p-5 rounded-2xl border font-semibold">
      <span className="text-lg">Your Balance </span>
      <span className="ml-4">Rs. {balance}</span>
    </div>
  )
}
