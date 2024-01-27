import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { render } from 'react-dom'

function App() {
  console[render , setRender] = useState(true);
  useEffect(() =>{
    setTimeout(()=>{
      setRender(false);
    })
  })

  return (
  <MyComponent/>
  )
}
function MyComponent() {
  useEffect(() => {
    console.error("Component mounted")
    // Perform setup or data fetching here

    return () => {
      console.log(" component Unmounted")
      // Cleanup code (similar to componentWillUnmount)
    };
  }, []);

  // Render UI
}
export default App
