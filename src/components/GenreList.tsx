import React from "react";
import useData from "../hooks/useData";
import useGenre, { Genre } from "../hooks/useGenre";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenre();
  return (
    <ul>
      {genres.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
