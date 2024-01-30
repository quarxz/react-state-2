import { useState } from "react";
import styles from "./MovieForm.module.css";

export function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [released, setReleased] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("title:", title);
          console.log("director:", director);
          console.log("released:", released);
          onAddMovie({
            title,
            director,
            released,
          });
        }}
        className={styles.form}
      >
        <div className={styles["input-group"]}>
          <label htmlFor="title">Title</label>
          <input
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            type="text"
            name="title"
            id="title"
          />
          {/* <p>{title}</p> */}
        </div>
        <div className={styles["input-group"]}>
          <label htmlFor="director">Director</label>
          <input
            value={director}
            onChange={(event) => {
              setDirector(event.target.value);
            }}
            type="text"
            name="director"
            id="director"
          />
          {/* <p>{director}</p> */}
        </div>
        <div className={styles["input-group"]}>
          <label htmlFor="released">Relaesed</label>
          <input
            value={released}
            onChange={(event) => {
              setReleased(event.target.value);
            }}
            type="text"
            name="released"
            id="released"
          />
          {/* <p>{released}</p> */}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
