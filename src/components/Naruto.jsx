import MovieList from "./AnimeList";

const Naruto = ({ searchTerm }) => {
  return (
    <MovieList
      query="Naruto"
      searchTerm={searchTerm}
      apiUrl={`https://api.jikan.moe/v4/anime?q=naruto`}
    />
  );
};

export default Naruto;