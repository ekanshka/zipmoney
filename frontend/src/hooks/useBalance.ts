import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useBalance = () => {
  const [balance, setBalance] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getBalance = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://week-4-paytm-mern.onrender.com/api/v1/account/balance",
        {
          headers: {
            Authorization: localStorage.getItem("authorization"),
          },
        }
      );
      setBalance(response.data.balance);
      setLoading(false);
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          if ((error.response.status === 401) || (error.response.status === 403)) {
            alert("Please log in");
            setLoading(false);
            navigate("/signin");
          } else {
            alert(error.response.data.msg);
            setLoading(false);
          }
        } else {
          console.log(error.message);
          setLoading(false);
        }
      } else {
        console.log(error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  return { balance, loading };
};
