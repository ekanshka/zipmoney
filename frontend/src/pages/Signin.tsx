import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import axios from "axios";

export const Signin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/api/v1/user/signin", formData)
      .then(async (response) => {
        if (response.status == 200) {
          const token = response.data.token;
          localStorage.setItem("authorization", `Bearer ${token}`);
          navigate('/dashboard')
          return;
        }

        if (response.status != 200) {
          alert(response.data.msg);
          return;
        }
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.msg);
          console.log('res')
        }else if (error.request) {
          alert(error.message);
          console.log('req')
        } else {
          alert(error.message)                //some other error
          return
        }
      });
  };

  const handleSignupRedirect = () => {
    navigate("/Signup");
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center place-items-center">
      <div className="p-10 flex flex-col gap-6 bg-white shadow-sm rounded-xl">
        <Heading text="Sign in" />
        <SubHeading text="Enter your information to create an account" />
        <InputBox
          id="username"
          label="Email"
          placeholder="email@gmail.com"
          onChange={handleChange}
        />
        <InputBox
          id="password"
          label="Password"
          type="password"
          placeholder="123"
          onChange={handleChange}
        />
        <Button onClick={handleSubmit} >Signin</Button>
        <BottomWarning
          text="Don't have an account yet?"
          linkText="Sign up"
          onClick={handleSignupRedirect}
        />
      </div>
    </div>
  );
};
