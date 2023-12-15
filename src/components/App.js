
import React ,{useState}from "react";
import './../styles/App.css';

const App = () => {
  let [text, setText]  = useState('');
  return (
    <div>
       <form action="">                  
      <p>Enter your name:</p>
       <input type="text"
       onChange={(e)=>setText(e.target.value)}
       value={text}/>
       </form>
       <p>Hello {text}!</p>
    </div>
  )
}
export default App
