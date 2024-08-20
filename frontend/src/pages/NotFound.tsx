import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


export const NotFound = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        navigate("/dashboard");
    })

  return (
    <div className="text-red-500 text-5xl">NotFound (redirecting to main page...)</div>
  )
}
