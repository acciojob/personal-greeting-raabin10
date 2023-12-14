
import React ,{useState}from "react";
import './../styles/App.css';

const App = () => {
  let [text, setText]  = useState('');
  return (
    <div>
      <p>Enter your name:</p>
       <input
       onChange={(e)=>setText(e.target.value)}
       value={text}/>
       {text.length > 0 ? <p>Enter your name:Hello {text}!</p>: null }
    </div>
  )
}
export default App
