// // import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const handleResizeWidth = () => {
    setWindowWidth(window.innerWidth)
  }
  const handleResizeHeight = () => {
    setWindowHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResizeWidth)
    window.addEventListener('resize', handleResizeHeight)
    
})
 return (
   <div class='window'>
     <p>Your window size is {windowWidth} by {windowHeight}</p>
     
  </div>
); 
}

export default App;