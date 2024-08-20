import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../components/ui/BottomWarning";
import { Button } from "../components/ui/Button";
import { Heading } from "../components/ui/Heading";
import { InputBox } from "../components/ui/InputBox";
import { SubHeading } from "../components/ui/SubHeading";
import { useState } from "react";
import axios from "axios";

export const Signin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
      .post("https://week-4-paytm-mern.onrender.com/api/v1/user/signin", formData)
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

  const handleSignupRedirect = () => {
    navigate("/signup");
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
        <Button onClick={handleSubmit} loading={loading}>Signin</Button>
        <BottomWarning
          text="Don't have an account yet?"
          linkText="Sign up"
          onClick={handleSignupRedirect}
        />
      </div>
    </div>
  );
};
