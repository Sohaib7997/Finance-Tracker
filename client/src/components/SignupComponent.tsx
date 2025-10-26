import { useContext, useState } from "react";
import { themeContext } from "../context/context";

export function Signup() {
  const theme = useContext(themeContext);
  const isLight = theme.theme === "white";
  const bgColor = isLight ? "bg-white" : "bg-gray-900";
  const textColor = isLight ? "text-black" : "text-white";
  const inputBg = isLight ? "bg-gray-100" : "bg-gray-800";
  const inputBorder = isLight ? "border-gray-300" : "border-gray-600";

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div
      className={`${bgColor} ${textColor} flex h-screen w-full justify-center items-center`}
    >
      <div
        className={`flex flex-col p-8 rounded-lg shadow-2xl w-80 ${isLight ? "bg-gray-50" : "bg-gray-800"}`}
      >
        <h3 className="text-2xl font-semibold text-center mb-6">
          Create an Account
        </h3>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className={`p-2 rounded-md border ${inputBorder} ${inputBg} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`p-2 rounded-md border ${inputBorder} ${inputBg} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={`p-2 rounded-md border ${inputBorder} ${inputBg} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
