import { useRef, useState } from 'react'
import './App.css'
import { useCallback } from 'react';
import { useEffect } from 'react';

function App() {
  // States
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // UseRef Hook variable creation
  const passwordRef = useRef(null) // Basically used to store a reference

  // Password generating Function/Method
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz"

    if (numberAllowed) str += '1234567890';
    if (charAllowed) str += '!@#$%^&*()_+-={}:<>';

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
      console.log(pass)
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  // Copy-Paste Code
  const copyPassToClip = useCallback(() => {
    console.log('Reff', passwordRef)
    // For optimization purpose UseRef is used here
    passwordRef.current?.select();
    console.log(passwordRef.current?.value);
    passwordRef.current.setSelectionRange(0, 6)
    window.navigator.clipboard.writeText(password)
  }, [password])

  // UseEffects
  useEffect(() => { passwordGenerator(); }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-center text-orange-500 bg-gray-400'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password} id=""
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            ref={passwordRef}
            readOnly />
          <button onClick={copyPassToClip} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label> Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1"><input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => { setNumberAllowed((prev) => !prev) }} />
            <label htmlFor='numberInput' >Numbers</label>
          </div>

          <div className="flex items-center gap-x-1"><input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={() => { setCharAllowed((prev) => !prev) }} />
            {/* when want to propogate event in OnChange use callBack */}
            <label htmlFor='charInput' >Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
