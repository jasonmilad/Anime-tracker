import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import About from "./about.js"
import TopCharts from "./chart.js"
import MyList from "./mylist.js"
import MyProfile from "./myprofile.js"
import Settings from "./settings.js"
import {useState, useEffect} from 'react';



function Header() {
  const [username, setUsername] = useState()
  function onInputChange(event) {
    setUsername(event.target.value);
  }
  return (
      <ul className = "flex list-none	shadow flex justify-center my-0 p-5 mx-auto gap-8">
          <li className='rounded p-2.5 hover:shadow-md'><Link to = "/">Top Charts</Link></li>
          <li className='rounded p-2.5 hover:shadow-xl'><Link to="/mylist">My List</Link></li>
          <li className='rounded p-2.5 hover:shadow-xl'><Link to="/myprofile">My Profile</Link></li>
          <li className='rounded p-2.5 hover:shadow-xl'><Link to="/about">About</Link></li>
          <li className='rounded p-2.5'> <label for='mode' className="checkbox"> <input type="checkbox" id = 'mode' name = 'mode' className = 'rounded w-32'/></label></li>
          <li className = 'p-3'> <input className = "rounded shadow bg-gray-100 pl-2.5" type="text" placeholder = "username" onChange = {onInputChange} /></li>
      </ul>
  )
}


function App() {
  return (
    <div className="App">
     <Header/>
     <Routes className = "bg-slate-200">
        <Route path="/mylist" element={<MyList/>} />
        <Route path="/myprofile" element={<MyProfile/>} />
        <Route path="/" element={<TopCharts/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
