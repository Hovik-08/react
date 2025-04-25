import MovieList from "./AnimeList";

const Detective = ({ searchTerm }) => {
  return (
    <MovieList
      query="Detective"
      searchTerm={searchTerm}
      apiUrl={`https://api.jikan.moe/v4/anime?q=detective`}
    />
  );
};

export default Detective;