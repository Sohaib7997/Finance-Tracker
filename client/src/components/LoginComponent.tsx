import { Link } from "@tanstack/react-router";
import { useContext, useState } from "react";
import { themeContext } from "../context/context";

export function LoginComponent() {
  const theme = useContext(themeContext);
  const isLight = theme.theme === "white";
  const bgColor = isLight ? "bg-white" : "bg-gray-900";
  const textColor = isLight ? "text-black" : "text-white";
  const inputBg = isLight ? "bg-gray-100" : "bg-gray-800";
  const inputBorder = isLight ? "border-gray-300" : "border-gray-600";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });e
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div
      className={`${bgColor} ${textColor} flex h-screen w-full justify-center items-center`}
    >
      <div
        className={`flex flex-col p-8 rounded-lg shadow-lg w-80 ${
          isLight ? "bg-gray-50" : "bg-gray-800"
        }`}
      >
        <h3 className="text-2xl font-semibold text-center mb-6">Login</h3>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
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
            Log In
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          New here?{" "}
          <Link
            to="/signup"
            className="text-blue-500 hover:underline hover:text-blue-600"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
