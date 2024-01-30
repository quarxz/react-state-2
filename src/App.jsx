import { useState } from "react";
import styles from "./App.module.css";
import { Movies } from "./components/Movies";
import { MovieForm } from "./components/MovieForm";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      title: "Titanic",
      released: "1997",
      director: "James Cameron",
      favorite: false,
    },
    {
      id: uuidv4(),
      title: "The Naked Gun",
      released: "1988",
      director: "David Zucker",
      favorite: true,
    },
    {
      id: uuidv4(),
      title: "Evil under the sun",
      released: "1982",
      director: "Guy Hamilton",
      favorite: true,
    },

    {
      id: uuidv4(),
      title: "Sherlock Holmes",
      released: "2009",
      director: "Guy Ritchie",
      favorite: true,
    },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleToggleFavorite(id, newFavoriteStatus) {
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
  // delete
  function handleDeleteMovie(movieTitle) {
    setMovies(
      movies.filter((movie) => {
        return movie.title !== movieTitle;
      })
    );
  }
  // create
  function handleMovie(newMovie) {
    setMovies([
      { ...newMovie, id: uuidv4(), isFavorite: false },
      ...movies,
    ]);
    setIsFormOpen(false);
  }

  return (
    <>
      <header>
        <h1>Movies List</h1>
      </header>
      <div className={styles["header-box"]}>
        <button
          onClick={() => {
            setIsFormOpen((prevIsFormOpen) => !prevIsFormOpen);
          }}
        >
          {isFormOpen ? "Cancel" : "Add Movie"}
        </button>
      </div>
      {isFormOpen ? <MovieForm onAddMovie={handleMovie} /> : <></>}
      <main>
        {movies.map((movie) => {
          return (
            <Movies
              key={movie.id}
              onToggleFavorite={(newFavoriteStatus) => {
                handleToggleFavorite(movie.id, newFavoriteStatus);
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
      {/* <p>{JSON.stringify(movies)}</p> */}
    </>
  );
}

export default App;
