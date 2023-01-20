import axios from "axios";

const searchOMDB = (title) =>
  axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${title}`);

export default searchOMDB;
