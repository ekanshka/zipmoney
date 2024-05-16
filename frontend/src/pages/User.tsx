import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { DangerButton } from "../components/DangerButton";
import { LabelInput } from "../components/LabelInput";
import { LabelSpan } from "../components/LabelSpan";
import { useCurrentUser } from "../hooks/useCurrentUser";
import axios from "axios";
import { Appbar } from "../components/Appbar";


export const User = () => {
  const currentUser = useCurrentUser();
  const [form, setForm] = useState({firstName: currentUser.firstName, lastName: currentUser.lastName})
 

  useEffect(() => {
    setForm({firstName: currentUser.firstName, lastName: currentUser.lastName})
  }, [currentUser])


  const handleDeleteAcc = () => {};

  const handleUpdateDetails = () => {
    // send form as body of put req to backend update api and alert for success or fail
    axios.put("http://localhost:3000/api/v1/user/", form, {
      headers: {
        Authorization: localStorage.getItem('authorization')
      }
    }).then((response) => {
      alert(response.data.msg)
    }).catch((error) => {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        alert(error.message);
      }
    })
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({...prev, [e.target.name]: e.target.value}))
  };

  return (
    <div className="h-screen w-screen flex flex-col p-5 place-items-center gap-32 bg-white">
      <Appbar />
      <div className=" p-7 flex flex-col gap-7 rounded-xl shadow-lg">
        <h3 className="text-bold text-2xl ">User Details</h3>
        <LabelSpan label="Username : ">{currentUser.username}</LabelSpan>
        <LabelSpan label="User ID : ">{currentUser.userId}</LabelSpan>

        <LabelInput
          name="firstName"
          label="First Name : "
          input={form.firstName}
          onChange={handleChange}
        ></LabelInput>
        <LabelInput
          name="lastName"
          label="Last Name : "
          input={form.lastName}
          onChange={handleChange}
        ></LabelInput>

        <Button onClick={handleUpdateDetails}> Update Details </Button>
        <DangerButton onClick={handleDeleteAcc}> Delete Account </DangerButton>
        {/* <dialog></dialog> */}
      </div>
    </div>
  );
};



