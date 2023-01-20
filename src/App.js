import { useEffect } from "react";
import searchOMDB from "./utils/OMDB";

function App() {

  const searchMovie = async title => {
    const { data: movie } = await searchOMDB(title)
    console.log(movie)
  }

  useEffect(() => {
    searchMovie('Goodfellas')
  }, [])

  return <div></div>;
}

export default App;
