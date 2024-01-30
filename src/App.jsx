import { useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Titanic",
      released: "1997",
      director: "James Cameron",
      favorite: false,
    },
    {
      id: 2,
      title: "The Naked Gun",
      released: "1988",
      director: "David Zucker",
      favorite: true,
    },
    {
      id: 3,
      title: "Das Böse unter der Sonne",
      released: "1982",
      director: "Guy Hamilton",
      favorite: true,
    },

    {
      id: 5,
      title: "Sherlock Holmes",
      released: "2009",
      director: "Guy Ritchie",
      favorite: true,
    },

    {
      id: 6,
      title: "Barbie",
      released: "2023",
      director: "Greta Gerwig",
      favorite: false,
    },
  ]);

  function handleFavoriteChange(id, newFavoriteStatus) {
    setMovies(
      movies.map((movie) => {
        if (movie.id === id) {
          return {
            ...movie,
            favorite: newFavoriteStatus,
          };
        } else {
          return movie;
        }
      })
    );
  }

  function handleDeleteMovie(movieTitle) {
    setMovies(
      movies.filter((movie) => {
        return movie.title !== movieTitle;
      })
    );
  }

  return (
    <>
      <header>
        <h1>Movies List</h1>
      </header>
      <main>
        {movies.map((movie) => {
          return (
            <Movies
              key={movie.id}
              onFavoriteChange={(newFavoriteStatus) => {
                handleFavoriteChange(movie.id, newFavoriteStatus);
              }}
              onMovieDelete={(movieTitle) => {
                handleDeleteMovie(movieTitle);
              }}
              title={movie.title}
              released={movie.released}
              director={movie.director}
              favorite={movie.favorite}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
