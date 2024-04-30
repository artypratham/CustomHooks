import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import axios from "axios";



// function App() {

//   return (
//     <>
//       <MyComponent/>
//     </>
//   )
// }


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



//a function to make the component disappear after 5 seconds
// function MyComponent() {

//   const [isVisible,setIsVisible] = useState(true);


//   useEffect(() => {
//     const timer = setTimeout(()=> {
//       setIsVisible(false)
//     },5000)

//     return () => clearTimeout(timer);
    
//   }, []);

    
//   return isVisible? (
//     <div>
//     From inside my component 
//     </div> 
//   ) : null;
// }




//typical way without custom hooks

// function App() {
  
//   const [todos,setTodos] = useState([])

//   useEffect(()=>{
//     axios.get('https://sum-server.100xdevs.com/todos')
//     .then(res => {
//       setTodos(res.data.todos);
//     })
//   },[])
  
  
//   return(
//   <>
//     {todos.map(todo => <Track  todo={todo} key={todo.id}/>)}  
//   </>
//   )
// }





// function Track ({todo}) {

//   return(
//     <>
//       <div>
//         {todo.title}  
//       </div>  
//       <br/>
//       <div>
//         {todo.description}
//       </div>
//     </>
//   )

// }









//complete get data custom hook with loading and setInterval()

// function App() {
//   const {todos , loading} = useTodos(5);
//   if(loading){
//     return (
//       <>
//       Loading....
//       </>
//     )
//   }
  
//   return(

//     <>
//       {todos.map(todo => <Track todo={todo} key={todo.id} />)}
//     </>
//   )
// }


// function useTodos(n) {
//   const [todos, setTodos]  =useState([])
//   const [loading, setLoading] = useState(true)


//   function getData(){
//     axios.get("https://sum-server.100xdevs.com/todos")
//     .then(res=> {
//       setTodos(res.data.todos)
//       setLoading(false)
//   })}


//   useEffect(() => {
//     const value = setInterval( ()=> {
//       getData();
//     }, n * 1000)
//     getData();

//     //clears the previous n if their is any change in n i.e the previous clock stops and a new clock starts executing 
//     //heres the clean up function
//     return () => {
//       clearInterval(value)
//     }
//   },[n])


//   return {
//           todos : todos,
//           loading: loading
//         };
// }


// function Track({todo}) {
//   return(
//     <>
//     <div>
//      {todo.title}
//    </div>
//    <div>   
//      {todo.description}
//    </div>
//    </>
//   )  
// }

// export default App;














//Browser functionality related hooks
// function useIsOnline() {
//   const [usersStatus, setUserStatus] = useState(window.navigator.onLine)

//   useEffect(() => {
//     window.addEventListener('online', () => setUserStatus(true));
//     window.addEventListener('offline', () => setUserStatus(false));
//   }, [])
 
//   return usersStatus;
// }



// function App() {
//   const isOnline = useIsOnline(5);
//   return(
//     <>
//       {isOnline ? "You are online " : "Youare not online "}
//     </>
//   )
// }
// export default App;






//complete useMousePointer hook 

function useMousePointer() {
  const [ position, setPosition] = useState({x: 0, y: 0});

  const handleMouseMove = (e) => {
    setPosition({x: e.clientX, y: e.clientY});
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return() => {
      window.removeEventListener('mousemove', handleMouseMove)
    };
  }, []);

  return position;
}

function App(){
  const mousePointer = useMousePointer()

  return (
    <>
    Your mouse pointer is {mousePointer.x} {mousePointer.y}
    </>
  )

}


export default App

































