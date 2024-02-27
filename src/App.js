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
// import './App.css';

// import React, {useState} from 'react';

// function App() {
//   const [state, setState] = useState({count :4 , color:'blue'});
//   const count = state.count
//   const color = state.color
//   function decreament() {
//     setState(prevState => {
//       return {...prevState ,count:prevState.count-1 }
//     })
//   }
//   function increament() {
//     setState(prevState => {
//       return {...prevState,
//         count:prevState.count+1
//       }
//     })
//   }

//   return (
//     <div>
//       <button onClick={decreament}>-</button>
//       <span>{count}</span>
//       <span>{color}</span>
//       <button onClick={increament}>+</button>
//     </div>
//   );
// }

// export default App;
