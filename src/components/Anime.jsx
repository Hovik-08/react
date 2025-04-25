import { useState, useEffect } from 'react';
import Slide from './Slide';
import Animecard from './AnimeCard';

const Anime = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime?type=ona")
      .then(res => res.json())
      .then(data => setMovies(data.data))
      .catch(console.error);
  }, []);

  const filtr = movies.filter(movie =>
    movie.title?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  return (
    <div className="anim-page">
      <Slide />
      <h2 className="sect-tit">TOP ANIMES</h2>
      <div className="anim-grid">
        {filtr.length > 0
          ? filtr.map(movie => <Animecard key={movie.mal_id} movie={movie} />)
          : <div className="no-results">No Result</div>
        }
      </div>
    </div>
  ); 
};

export default Anime;
