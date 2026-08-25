'use client';

import { useState, useEffect } from 'react';

const slides = [
   {
    id: 'biografias',
    titulo: 'Biografías',
    gif: '/images/carrusel/biografias.gif',
    texto: 'Conocé a los jugadores más destacados de la historia del ajedrez.',
  },
   {
    id: 'libros',
    titulo: 'Biblioteca',
    gif: '/images/carrusel/libros.gif',
    texto: 'Explorá los libros más recomendados para aprender a dominar cada aspecto del juego.',
  },
   {
    id: 'buscador',
    titulo: 'Buscador de partidas',
    gif: '/images/carrusel/buscador.gif',
    texto: 'Encontrá partidas de los grandes maestros, descargalas en formato PDF y estudialas desde el tablero interactivo.',
  },
  {
    id: 'tablero',
    titulo: 'Tablero interactivo',
    gif: '/images/carrusel/tablero.gif',
    texto: 'Pegá el PGN de una partida y reproducila jugada por jugada, con botones para avanzar y retroceder.',
  },
];

export default function Carrusel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [index]);

  function anterior() {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }

  function siguiente() {
    setIndex((prev) => (prev + 1) % slides.length);
  }

  const slideActual = slides[index];

  return (
    <div className="carrusel">
      <button className="carrusel-flecha carrusel-flecha-izq" onClick={anterior} aria-label="Slide anterior">
        &#8592;
      </button>

      <div className="carrusel-slide">
        <img src={slideActual.gif} alt={slideActual.titulo} className="carrusel-gif" />
        <h3 className="carrusel-titulo">{slideActual.titulo}</h3>
        <p className="carrusel-texto">{slideActual.texto}</p>
      </div>

      <button className="carrusel-flecha carrusel-flecha-der" onClick={siguiente} aria-label="Slide siguiente">
        &#8594;
      </button>
    </div>
  );
}