import Animelist from "./AnimeList";

const Adventurous = ({ searchTerm }) => {
  return (
    <Animelist
      query="Adventurous"
      searchTerm={searchTerm}
      apiUrl={`https://api.jikan.moe/v4/anime?q=adventurous`}
    />
  );
};

export default Adventurous;