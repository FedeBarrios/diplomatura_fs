import Carrusel from '@/components/carrusel';

export default function Home() {
  return (
    <main>
      <h1>Bienvenidos!</h1>
      <div className = "subtitulo">
        <p>En la Biblioteca del Ajedrez vas a encontrar herramientas útiles para el estudio de cada una de las fases del juego.</p>
      </div>
      <Carrusel />
    </main>
  );
}
