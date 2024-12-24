import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  // setCounter is a method which controls variable counter
  // default value of counter here is 0

  // let counter = 5;
  const AddNum = () => {
    // console.log('clicked', counter);
    // counter++;
    if (counter < 10)
      setCounter(counter + 1);
  }

  const RemoveNum = () => {
    if (counter > 0)
      setCounter(counter - 1);
  }

  return (
    <>

      <h1>Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={AddNum}>Add Value {counter}</button> <br />
      <button onClick={RemoveNum}>Remove Value {counter}</button>

      {/* <div className="card">
        <button onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
      </div> */}

    </>
  )
}

export default App
