import { useContext } from "react";
import { themeContext } from "../context/context";

export function Signup() {
    const theme =useContext(themeContext);
  return (
    <div className={`border-2 border-gray-300  bg-${theme.theme}`}>
      <h3>Welcome to Signup!</h3>
    </div>
  )
}