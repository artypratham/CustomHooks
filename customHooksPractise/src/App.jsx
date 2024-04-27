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


function App() {
  const todos = useTodos();
  return(
    <>
      {todos.map(todo => <Track todo={todo} key={todo.id} />)}
    </>
  )
}


function useTodos() {
  const [todos, setTodos]  =useState([])

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(res=> {
      setTodos(res.data.todos)
    })
  },[])

  return todos;
}


function Track({todo}) {
  return(
    <>
    <div>
     {todo.title}
   </div>
   <div>
     {todo.description}
   </div>
   </>
  )


  
}




export default App;
 