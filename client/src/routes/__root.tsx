import { Outlet, createRootRoute } from '@tanstack/react-router'
import { themeContext as ThemeContext } from '../context/context';
import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [theme, setTheme] = useState({ theme: "white" });

  const handleTheme = () => {
    setTheme((prev) => ({
      theme: prev.theme === "white" ? "black" : "white",
    }));
  };

  return (
    <ThemeContext value={theme}>
      <label className="inline-flex items-center cursor-pointer absolute top-5 right-2">
        <input
          type="checkbox"
          checked={theme.theme === "black"}
          onChange={handleTheme}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
          dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
          peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
          peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 
          after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full 
          after:h-5 after:w-5 after:transition-all dark:border-gray-600 
          peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
        ></div>
        <span className="ms-3 text-lg">
          {theme.theme === "white" ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-slate-300" />
          )}
        </span>
      </label>
      <Outlet />
    </ThemeContext>
  );
}
