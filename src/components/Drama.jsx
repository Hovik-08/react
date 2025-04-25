import Animelist from "./AnimeList";

const Drama = ({ searchTerm }) => {
  return (
    <Animelist
      query="Drama"
      searchTerm={searchTerm}
      apiUrl={`https://api.jikan.moe/v4/anime?q=drama`}
    />
  );
};

export default Drama;