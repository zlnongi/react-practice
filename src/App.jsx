import React from 'react'

function App() {
  let text = "hello";
  const [box, setBox] = useState("han");

  return (
    <>
    <div className='container' style={{background:"orange", fontSize:"20px"}}>test</div>
    <h2>{text}</h2>
    <p>box</p>
    </>
  )
}

export default App