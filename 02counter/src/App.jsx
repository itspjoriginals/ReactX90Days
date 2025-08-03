import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  // const addValue = ()=>{
  //   if(count=='20'){
  //     setCount(20);
  //   }
  //   else{
  //     setCount(count+1)
  //   }
  // }

  const addValue = ()=>{
  setCount(count+1)
  setCount(count+1)
  setCount(count+1)
  setCount(count+1)
  }

  const removeValue = () =>{
    if(count==0){
      setCount(0);
    }
    else{
      setCount(count -1);
    }
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {count}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
