
import React ,{useState}from "react";
import './../styles/App.css';

const App = () => {
  let [text, setText]  = useState('');
  return (
    <div>
       <form>                  
      <p>Enter your name:</p>
       <input type="text"
       onChange={(e)=>setText(e.target.value)}
       value={text}/>
       {text.length > 0 ? <p>Hello {text}!</p>: null }
       </form>
    </div>
  )
}
export default App
