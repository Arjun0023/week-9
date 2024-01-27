import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

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
