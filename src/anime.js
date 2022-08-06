function show(anime) {
    return(
        <div key={anime.mal_id} className = "border-4 border-blue-700 mx-2.5 my-2.5 rounded-md h-fit"> <a href={anime.url}><img className = "block mx-auto my-2.5" src={anime.images.jpg.image_url}/> <h1 className="text-center text-lg">{anime.title}</h1></a><p className="text-center text-sm truncate">{anime.synopsis}</p></div>)
}

export default show