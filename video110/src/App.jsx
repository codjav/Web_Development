import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [showbtn, setshowbtn] = useState(false);
  const [todos, setTodos] = useState(
    [{
      title:"Hey",
      desc:"I am a good todo"
    },
    {
      title:"Hello",
      desc:"I am a very good todo"
    },
    {
      title:"Salam",
      desc:"I am best todo"
    }]
  )


  const Todo = ({todo}) => {

    return (<><div className="todo">{todo.title}</div>
    <div className="todo">{todo.desc}</div></>);

  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div>

        <h1>Vite + React</h1>

        {showbtn ? (
          <button>Shownbtn is true</button>
        ) : (
          <button>Showbtn is false</button>
        )}

        {/* {showbtn && <button>I will be shown when second button is clicked.</button>} */}

      </div>

      {
        todos.map(item=>{
          return <Todo key={item.title} todo={item}/>
        }
        )
      }

      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>Toggle Showbtn</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
