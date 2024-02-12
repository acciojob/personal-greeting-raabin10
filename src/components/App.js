
import React ,{useState}from "react";
import './../styles/App.css';

const App = () => {
 
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <p>
        Enter your name :
      </p>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      {name && <p>Hello {name}!</p>}
    </div>
  );
};
export default App
