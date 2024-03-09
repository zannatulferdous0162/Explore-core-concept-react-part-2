
import './App.css'
import Counter from './Counter';
import Friends from './Friend';
import Team from './Team';
import Users from './Users';
import Friend from './Friend';


function App() {

  // Without Paramiter
 function handleClick(){
  alert('Click Me');
 }

 const  handleClick2 = () =>{
  alert('Click Me2');
 }

 //With parameter
 const addToFive = (num) => {
  alert(num + 5);
 }


  return (
    <>
      
      <h3>React Core Concept 2</h3>
      <Friend></Friend>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={() => {alert("Click-3")}}>Click Me3</button>


      {/* With parameter */}
      <button onClick={() =>addToFive(5) }>addToFive</button>
    </>
  )
}

export default App
