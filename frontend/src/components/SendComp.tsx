import { useEffect, useState } from "react"
import { Heading } from "./Heading"
import { SubHeading } from "./SubHeading"
import { InputBox } from "./InputBox"
import { Button } from "./Button"
import axios from "axios"
import { useNavigate } from "react-router-dom"

interface ISendProps {
    toUserId: string,
    toFirstName: string,
    toLastName: string,
}


export const SendComp = ({toUserId, toFirstName, toLastName}: ISendProps) => {

  const navigate = useNavigate()
  const [initials, setInitials] = useState("")
  const [amount, setAmount] = useState<Number | null>(null)
  
  useEffect(() => {
    if (toFirstName && toLastName) {
      const firstInitial = toFirstName[0].toUpperCase();
      const lastInitial = toLastName[0].toUpperCase();
      const fullInitial = firstInitial + lastInitial;
      setInitials(fullInitial)
    }
  }, [])
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.target.value)
    setAmount(num)
  }

  function handleSubmit() {
    axios.post("http://localhost:3000/api/v1/account/transfer", {
      to: toUserId,
      amount: amount
    },{
      headers: {
        Authorization: localStorage.getItem("authorization")
      }
    }).then((response) => {
      alert(response.data.msg)
      navigate('/dashboard')
    }).catch((error) => {
      if (error.response) {
        alert(error.response.data.msg)
      } else {
        alert(error.message)
      }
    })
    
  }
  

  return (
    <div className="p-10 flex flex-col gap-6 bg-white shadow-md rounded-xl border">
        <Heading text="Send Money" />

        <SubHeading text="Recipient :" bold={true}/>
        <div className="flex justify-center items-center gap-3 border-2 p-2 rounded-full border-green-600">
          <button className="bg-green-600 text-white flex justify-center place-items-center text-sm md:text-lg p-3 h-10 w-10 md:h-12 md:w-12 rounded-full shadow-md ease-in-out duration-300 hover:scale-105">{initials}</button>
          <SubHeading text={toFirstName +" " + toLastName} />
        </div>
        <InputBox id="amount" label="Amount :"  placeholder="Rupees" type="number" onChange={handleChange}/>
        <Button onClick={handleSubmit}>Send</Button>

    </div>
  )
}
