import Login from './components/Login.js';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Register from './components/Register.js';
import Posts from "./components/Posts.js"
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import './App.css';

function App() {
  //useState hooks for user and jwt token
  const [user, setUser] = useState({})
  const [jwt, setJwt] = useState(false)

  return (
    <div className="App">
      {/*Navigation bar*/}
      <NavBar></NavBar>
      <Routes>
        {/*Route to home page*/}
        <Route path="/" element={<Home />} />
        {/*Route to login page*/}
        <Route path="/login" element={<Login setJwt={setJwt} setUser={setUser} jwt={jwt} user={user} />} />
        {/*Route to register page*/}
        <Route path="/register" element={<Register setUser={setUser} />} />
        {/*Route to posts page*/}
        <Route path="/posts" element={<Posts user={user} jwt={jwt} />} />
      </Routes>
    </div>
  );
}

export default App;
