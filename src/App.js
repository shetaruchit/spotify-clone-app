
import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';

function App() {

  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("I HEAVE TOKEN>>", token);
  }, [token]);

  return (
    <div className="app">
      {
        token ? ( <h1>logged in</h1> ) : (  <Login /> )
      }

    </div>
  );
}

export default App;
