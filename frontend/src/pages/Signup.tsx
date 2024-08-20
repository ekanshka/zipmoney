import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import axios from "axios";

export const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = () => {
    setLoading(true)
    axios
      .post("https://week-4-paytm-mern.onrender.com/api/v1/user/signup", formData)
      .then((response) => {
          const token = response.data.token;
          localStorage.setItem("authorization", `Bearer ${token}`);
          setLoading(false)
          navigate('/dashboard')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.msg);
          setLoading(false)
        } else {
          alert(error.message)    
          setLoading(false)           
        }
      });
  };

  const handleSigninRedirect = () => {
    navigate("/signin");
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center place-items-center">
      <div className="p-10 flex flex-col gap-6 bg-white shadow-sm rounded-xl">
        <Heading text="Sign up" />
        <SubHeading text="Enter your information to create an account" />
        <InputBox
          id="firstName"
          label="First Name"
          placeholder="John"
          onChange={handleChange}
        />
        <InputBox
          id="lastName"
          label="Last Name"
          placeholder="Doe"
          onChange={handleChange}
        />
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
        <Button onClick={handleSubmit} loading={loading}>Signup</Button>
        <BottomWarning
          text="Already have an account?"
          linkText="Sign in"
          onClick={handleSigninRedirect}
        />
      </div>
    </div>
  );
};
