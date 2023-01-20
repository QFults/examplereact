import { useEffect } from "react";
import searchOMDB from "./utils/OMDB";
// import './App.css'

const styles = {
  heading: {
    color: 'red',
    backgroundColor: 'blue'
  }
}

function App() {

  const searchMovie = async title => {
    const { data: movie } = await searchOMDB(title)
    console.log(movie)
  }

  useEffect(() => {
    searchMovie('Goodfellas')
  }, [])

  return <h1 style={styles.heading}>Hello World!</h1>;
}

export default App;
