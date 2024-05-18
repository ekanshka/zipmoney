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
    <section className="w-[95%] p-5 rounded-2xl border font-semibold shadow-sm text-sm sm:text-base md:text-lg flex flex-col md:flex-row justify-start items-start">
      <span className="text-base md:text-lg">Your Balance </span>
      <span className="text-base md:text-lg md:ml-4">Rs. {balance}</span>
    </section>
  )
}
