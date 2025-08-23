import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './features/counter/counterSlice'

function App() {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  function handleIncrementClick ()  {
    dispatch(increment());
  };
  

  function handleDecrementClick() {
    dispatch(decrement());
  };

    function handleResetClick ()  {
    dispatch(reset());
  };
      function handleAmountClick ()  {
    dispatch(incrementByAmount(amount));
  };

  return (
<>
<div className="container">
  <button onClick={handleIncrementClick}>+</button>
  <p>Count:{count}</p>
  <button onClick={handleDecrementClick}>-</button>
  <br />
  <button onClick={handleResetClick}>Reset</button>
  <br />
  <br />
  <input 
  type="number"
  placeholder="Enter Amount"
  value={amount}
  onChange={(e) => setAmount(Number(e.target.value))}
   />
  <button onClick={handleAmountClick}>
    Add Amount
  </button>
</div>
</>
  )
}

export default App
