
import React ,{useState}from "react";
import './../styles/App.css';

const App = () => {
 
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <p>
        Enter your name :
      </p>
    <div>
      
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      {name && <p>Hello {name}!</p>}
    </div>
  );
};
export default App
