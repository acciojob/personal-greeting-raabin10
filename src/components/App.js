
import React ,{useState}from "react";
import './../styles/App.css';

const App = () => {
 
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
 
  return (
    
    <div>
      <p></p>
      <form>

      <input
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      {name && <p>Hello {name}!</p>}
      </form>

    </div>
  );
};
export default App
