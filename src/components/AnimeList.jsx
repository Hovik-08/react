import { useEffect, useState } from "react";
import Animecard from "./AnimeCard";

const AnimeList = ({ query, searchTerm, apiUrl }) => {
  const [anim, fanim] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => fanim(data.data || []))
      .catch(console.error);
  }, [apiUrl]);

  const filtr = anim.filter(movie =>
    movie.title?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  );

  return (
    <div className="anim-page">
      <h2 className="section-title">{query}</h2>
      <div className="anim-grid">
        {filtr.length > 0
          ? filtr.map(movie => <Animecard key={movie.mal_id} movie={movie} />)
          : <div className="no-results">Nothing is hidden...</div>
        }
      </div>
    </div>
  );
};

export default AnimeList;