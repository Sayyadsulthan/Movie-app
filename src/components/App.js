import "../index.css";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { data } from "../data";
function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourute</div>
        </div>
        {data.map((movie, index) => (
          <MovieCard movie={movie} key={`movies-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
