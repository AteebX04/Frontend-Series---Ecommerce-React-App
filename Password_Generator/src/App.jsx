import { useCallback, useState, useEffect, useRef} from 'react'
import React from 'react'

import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")


  const passwordRef =useRef(null)



  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i=0; i<length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])


  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)})


  useEffect(() => {passwordGenerator()} , [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div>Generate Your Password</div>
      <div>
        <input 
        type="text"
        value ={password}
        placeholder='Pasword'
        readOnly
        ref={passwordRef}
        />
        <button onClick ={copyPasswordToClipboard}>COPY</button>
        </div>
      <div>
        <div>
          <input type="range" min ={6} max = {100} value ={length} className = 'cursor-pointer' onChange ={(e) => {setLength(e.target.value)}} />
          <label>Length : {length}</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked = {numberAllowed} id = "numberInput" onChange = {() => {setNumberAllowed((prev) => !prev)}} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked = {charAllowed} id = "characterInput"  onChange={() => {setCharAllowed((prev) => !prev)}}/>
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
