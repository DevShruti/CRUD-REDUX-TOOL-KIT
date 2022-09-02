import React from 'react';
import "./App.css";
import { useSelector } from "react-redux";


function App() {
  const userList = useSelector((state) => state.users.value);
  return (
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
        
        />
        <input
          type="text"
          placeholder="Username..."
          
        />
        <button>
          Add User
        </button>
      </div>
  );
}

export default App;
