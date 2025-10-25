import {  Outlet, createRootRoute } from '@tanstack/react-router'
import { themeContext as ThemeContext } from '../context/context';
import { useState } from 'react';

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
const [theme,setTheme] =useState({theme:"white"});


const handleTheme=()=>{
 theme.theme==="white"?setTheme({...theme,theme:"black"}):setTheme({...theme,theme:"white"})
}

  return (
    <ThemeContext value={theme}>
          <div role='buttton' className='border-2 border-gray-700 text-gray-500 w-25 rounded-2xl
           text-center absolute top-0 right-10 p-1  z-10 bg-gray-300 m-1'
            onClick={handleTheme}>    
          {theme.theme}
          </div>
      <Outlet />
    </ThemeContext>
  )
}