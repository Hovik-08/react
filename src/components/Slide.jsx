import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Slide = () => {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then(res => res.json())
      .then(({ data }) => setSlides(data.slice(0, 5)))
      .catch(err => console.error(err));
  }, []);

  const active = slides[current];
  if (!active) return null;

  return (
    <div className="slides">
      <img
        src={active.images?.jpg?.large_image_url}
        alt={active.title}
        onClick={() => navigate(`/show/${active.mal_id}`)}
      />
      <div className="controls">
        <button onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}>◀</button>
        <button onClick={() => navigate(`/show/${active.mal_id}`)}>▲</button>
        <button onClick={() => setCurrent((current + 1) % slides.length)}>▶</button>
      </div>
    </div>
  );
};

export default Slide;
