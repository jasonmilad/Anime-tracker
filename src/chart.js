import {useState, useEffect} from 'react';
import './anime.js'
import { Routes, Route, Link } from "react-router-dom";


function Card (props) {
  const [mouseState, setMouseState] = useState(false);
    if (mouseState ===false) {
      return(<AnimeCard onMouseEnterr = {() => setMouseState(true)} thisAnimes = {props.thisAnime}/>)
    }
    else {
      return(<AnimeInfo onMouseLeavee={()=> setMouseState(false)} thisAnime = {props.thisAnime}/>)
  }
}

function AnimeInfo(props) {
  return(
    <div onMouseLeave = {props.onMouseLeavee} className='overflow-scroll shadow-lg mx-2.5 my-2.5 rounded h-40 scale-105 w-auto flex cursor-pointe p-2.5'>
      <p>
        {props.thisAnime.synopsis}
      </p>
    </div>
  ) 
}

function AnimeCard(props) {
  return(
<div onMouseEnter = {props.onMouseEnterr} className = "shadow-lg mx-2.5 my-2.5 rounded h-40 w-auto flex cursor-pointer"> 
    <img className = "shadow-lg rounded" src={props.thisAnimes.images.jpg.image_url}/>
    <div className="flex flex-col mx-auto my-auto px-2.5">
      <h1 className="text-center text-sm ">{props.thisAnimes.title}</h1>
      <p className = "text-center">{props.thisAnimes.score}/10</p>
    </div>
    </div>
  )
}


function TopCharts() {
    const [userData, setUserData] = useState("Loading...");
    const [pageNumber, setPageNumber] = useState(1)
    async function fetchData(){
      const data = await fetch(`https://api.jikan.moe/v4/top/anime?page=${pageNumber}`, {mode: 'cors'});
      setUserData(await data.json());
    }
    useEffect(()=>{fetchData()}, [pageNumber])

    function nextPage() {
      setUserData("Loading...")
      setPageNumber(pageNumber+1)
    }

    function lastPage() {
      if(pageNumber>1){
      setUserData("Loading...")
      setPageNumber(pageNumber-1)}
    }
//https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
    let cardNumber = [...Array(25).keys()];

    if (userData ==="Loading...") {
      return(<div className="animate-pulse grid grid-cols-5 my-2.5"> {cardNumber.map((keyID)=>{return (<div key={keyID}className = "shadow-lg mx-2.5 my-2.5 rounded h-40 w-auto flex cursor-pointer"> 
      <div className = "shadow-lg rounded bg-gray-400 w-32"> </div>
      <div className="flex flex-col mx-auto my-auto px-2.5">
        <div className = "bg-gray-400 rounded h-10 w-20 mx-auto"> </div>
        <div className = "bg-gray-400 rounded h-5 w-10 mx-auto my-2.5"></div>
      </div>
      </div>)})}</div>)
    }
    else {

      return (<div className = "grid grid-cols-5 my-2.5"> {userData.data.map((anime)=>{return (<Link key={anime.mal_id} to = {'/'+anime.mal_id}><Card thisAnime = {anime} /> </Link>)})} <div className = "w-screen gap-10 flex justify-center"><div className = "text-4xl cursor-pointer"  onClick={lastPage}>←</div> <div className = "text-4xl cursor-pointer" onClick={nextPage}>→</div></div> </div>
      )
    }
}

// function AnimeCard() {

//   return (
//     <div className = "shadow-lg rounded "> </div>
//   )
// }
export default TopCharts