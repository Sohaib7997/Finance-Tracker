import { Link } from "@tanstack/react-router";
import { useContext } from "react";
import { themeContext } from "../context/context";

export function LoginComponent() {
     const theme =useContext(themeContext);
     const textColor = theme.theme === 'white' ? 'black' : 'white';
  return (
    <div className={` flex flex-col h-screen w-full   bg-${theme.theme} text-${textColor}`} >
             <h3>Welcome Home!</h3>
      <p>New here, no worries create new account</p>
      <Link to="/signup">Go to Signup</Link>

        </div>
     
  )
}