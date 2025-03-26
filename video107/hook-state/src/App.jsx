import { useEffect, useState, useRef } from 'react'
import './App.css'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(1)
  const [color, setColor] = useState(10)
  const a = useRef(0)
  const ref=useRef()

  // Run on every render
  // useEffect(() => {
  //   a.current=a.current+1;
  //   alert(`I will run on every render ${a.current}`)
  // })

  // Run only on first render
  useEffect(() => {
    alert("Hey Welcome to my page.")
    ref.current.style.backgroundColor="red"
  }, [])

  // Run only when count was changed
  // useEffect(() => {
  //   alert("Count was changed")
  //   setColor(color+1)
  // }, [count])

  // // Return works when some component is unmounted(meand deleted or removed) from that file 
  // useEffect(() => {
  //   alert("Welcome to the page")
  
  //   return () => {
  //     alert("The component was unmounted")
  //   }
  // }, [])
  

  // useEffect(() => {
  //   alert("The color was changed.")
  // }, [color])
  
  

  return (
    <>
    <Navbar color={"red"}/>

    <div>The count is {count}</div>
    <button ref={ref} onClick={()=>{setCount(count*2)}}>Update Count</button>
    <button onClick={()=>{ref.current.style.display="none"}}>Change this</button>
    </>
  )
}

export default App
