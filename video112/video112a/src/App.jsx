import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [form, setform] = useState({email:"",phone:""})

  const handleClick = () => {
    alert("hey I am clicked");
  };

  const handleChange = (e) => {
    setform({...form,[e.target.name]:e.target.value})
  }

  // const handleMouseOver = () => {
  //   alert("Hey I am a mouse over");
  // };

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me </button>

        {/* <div className="red" onMouseOver={handleMouseOver}>
          I am a red div
        </div> */}
        <div>
        <input type="text" name="email" value={form.email} onChange={handleChange}/>
        <input type="text" name="phone" value={form.phone} onChange={handleChange}/>
        </div>
      </div>
    </>
  );
}

export default App;
