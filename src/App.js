import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import './App.css';

import Nav from './NAV/Nav';
import Anime from './components/Anime';
import Naruto from './components/Naruto';
import Show from "./components/Show";
import Login from "./components/Login";
import Drama from "./components/Drama";
import Horror from "./components/Horror";
import Detective from "./components/Detective";
import Adventurous from "./components/Adventurous";
import Footer from "./Footer/Footer";


function App() {
  const canvasRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];

    const createStars = (count = 1200) => {
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: Math.random() * 0.8 + 0.2
      }));
    };

    const updateAndDrawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#fff";

      stars.forEach(star => {
        star.x += star.speedX;
        star.y += star.speedY;

        if (star.y > canvas.height) star.y = 0;
        if (star.x > canvas.width) star.x = 0;
        if (star.x < 0) star.x = canvas.width;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(updateAndDrawStars);
    };

    createStars();
    updateAndDrawStars();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Nav setSearchTerm={setSearchTerm} />
      <Routes>
      <Route path="/" element={<Navigate to="/anime" replace />} />
        <Route path="/anime" element={<Anime searchTerm={searchTerm} />} />
        <Route path="/about" element={<Naruto searchTerm={searchTerm} />} />
        <Route path="/show/:mal_id" element={<Show />} />
        <Route path="/aziz" element={<Drama searchTerm={searchTerm} />} />
        <Route path="/horror" element={<Horror searchTerm={searchTerm} />} />
        <Route path="/adventurous" element={<Adventurous searchTerm={searchTerm} />} />
        <Route path="/detective" element={<Detective searchTerm={searchTerm} />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
      <canvas id="stars" ref={canvasRef} aria-hidden="true" />
    </div>
  );
}

export default App;
