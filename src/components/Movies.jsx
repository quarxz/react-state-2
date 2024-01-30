import styles from "./Movies.module.css";
export function Movies({
  title,
  released,
  director,
  favorite,
  onToggleFavorite,
  onMovieDelete,
}) {
  function handleFavorite() {
    onToggleFavorite(favorite ? false : true);
  }
  function handleDeleteMovie() {
    onMovieDelete(title);
  }
  return (
    <section>
      <h2>{title}</h2>

      <p>Released: {released}</p>
      <p>Director: {director}</p>

      <button onClick={handleFavorite}>
        {favorite ? "Add to favorites" : "Remove from favorites"}
        <span
          className={`${styles.icon} ${favorite && styles["show--icon"]}`}
        >
          &hearts;
        </span>
      </button>
      <span className={styles["btn-delete"]} onClick={handleDeleteMovie}>
        <svg
          className={styles.highlight}
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="100" x2="100" y2="0" />
          <line x1="0" y1="0" x2="100" y2="100" />
        </svg>
      </span>
    </section>
  );
}
