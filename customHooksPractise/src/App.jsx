import { useState, useEffect } from 'react';
import React from 'react';
import './App.css'

function App() {

  return (
    <>
      <MyComponent/>
    </>
  )
}


//function based components using hooks
// function MyComponent() {
  // const [count, setCount] = useState(0);

  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

  // return (
  //   <div>
  //     <p>{count}</p>
  //     <button onClick={incrementCount}>Increment</button>
  //   </div>
  // );
// }


//class based components, no usage of hooks
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }




function MyComponent() {

  const [isVisible,setIsVisible] = useState(true);


  useEffect(() => {
    const timer = setTimeout(()=> {
      setIsVisible(false)
    },5000)

    return () => clearTimeout(timer);
    
  }, []);

    
  return isVisible? (
    <div>
    From inside my component 
    </div> 
  ) : null;
}



export default App
 