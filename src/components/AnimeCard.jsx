import { Link } from 'react-router-dom';

const AnimeCard = ({ movie }) => {
  return (
    <Link to={`/show/${movie.mal_id}`} className="anim-card">
      <img
        src={movie.images?.jpg?.image_url}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
    </Link>
  );
};

export default AnimeCard;
