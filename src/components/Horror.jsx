import Animelist from "./AnimeList";

const Horror = ({ searchTerm }) => {
  return (
    <Animelist
      query="Horror"
      searchTerm={searchTerm}
      apiUrl="https://api.jikan.moe/v4/anime?genres=14"
    />
  )
}

export default Horror;