import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  /* useEffect(() => {
    axios.get('http://localhost:5000/api')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
  }, []); */

  


  return (
    <div>
      <h1>Hello my name is pooja</h1>
    </div>
  );
}

export default App;
