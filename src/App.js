import Movie from "./Components/Movie";
import { movies } from "./movieDummy";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {movies.results.map((item)) => {
          return (
            <Movie 
             poster_path = {item.poster_path}
             title = {item.title}
             vote_average = {item.vote_average}
             overview = {item.overview}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;