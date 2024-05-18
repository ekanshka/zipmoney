import { useEffect, useRef, useState } from "react";
import { Button } from "../components/Button";
import { DangerButton } from "../components/DangerButton";
import { LabelInput } from "../components/LabelInput";
import { LabelSpan } from "../components/LabelSpan";
import { useCurrentUser } from "../hooks/useCurrentUser";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Dialog } from "../components/Dialog";
import { useNavigate } from "react-router-dom";


export const User = () => {
  const {currentUser, fetchError} = useCurrentUser();
  const [form, setForm] = useState({firstName: currentUser.firstName, lastName: currentUser.lastName})
  const navigate = useNavigate();

  useEffect(() => {
    if (fetchError) {
      alert(fetchError);
    }
    setForm({firstName: currentUser.firstName, lastName: currentUser.lastName})
  }, [currentUser])



  const handleUpdateDetails = () => {
    // send form as body of put req to backend update api and alert for success or fail
    axios.put("https://week-4-paytm-mern.onrender.com/api/v1/user/", form, {
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
  

  const dialogRef = useRef<HTMLDialogElement>(null);

  const toggleDialog = () => {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute('open')?
    dialogRef.current.close() :
    dialogRef.current.showModal();

  };

  const deleteAccount = () => {
    axios.post("https://week-4-paytm-mern.onrender.com/api/v1/user/", {} , {
      headers: {
        Authorization: localStorage.getItem('authorization')
      }
    }).then((response) => {
      alert(response.data.msg)
      navigate('/signin')
    }).catch((error) => {
      if (error.response) {
        alert(error.response.data.msg)
      } else {
        alert(error.message)
      }
    })
  }

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
        <DangerButton onClick={toggleDialog}> Delete Account </DangerButton>
        <dialog ref={dialogRef} className="rounded-xl shadow-2xl ease-in duration-300 backdrop"><Dialog handleYes={deleteAccount} handleNo={toggleDialog}/></dialog>
      </div>
    </div>
  );
};



