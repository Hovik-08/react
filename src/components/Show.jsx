import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Show = () => {
  const { mal_id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${mal_id}`)
      .then(res => {
        return res.json();
      })
      .then(data => setMovie(data.data))
      .finally(() => setLoading(false));
  }, [mal_id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="anim-details">
      <img
        src={movie.images?.jpg?.large_image_url}
        alt={movie.title}
      />
      <div className="info">
        <h1>{movie.title}</h1>
        <p className="score">⭐ {movie.score?.toFixed(1)}</p>
        <p className="year">{movie.year}</p>
        <p className="description">{movie.synopsis}</p>
      </div>

      {movie.trailer?.embed_url ? (
        <div className="video">
          <iframe
            src={movie.trailer.embed_url}
            title="Trailer"
          />
        </div>
      ) : (
        <p style={{ color: "#999", marginTop: "1rem" }}>Trailer available soon</p>
      )}

    </div>
  );
};

export default Show;