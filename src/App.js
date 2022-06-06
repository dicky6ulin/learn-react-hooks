import React, { useState } from 'react';
import Navbar from './home/Navbar';
import Login from './login/Login';

const App = () => {

  const [logged, setLogged] = useState(false);

  const login = (param) => {
    if (param.username === 'admin@example.com' && param.password === '12345678') {
      setLogged(true)
    } else {
      alert("Incorect email or password")
    }
  }

  const logout = () => {
    setLogged(false)
  }

  return (
    <>
      {logged ? <Navbar callback={logout} /> : <Login callback={login}/>}
    </>
  );
}

export default App;