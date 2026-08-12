"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function Tablero() {
  const [pgn, setPgn] = useState("");
  const [posiciones, setPosiciones] = useState([]);
  const [jugadaActual, setJugadaActual] = useState(0);
  const [rangosJugadas, setRangosJugadas] = useState([]);

  const textareaRef = useRef(null);
  const highlightRef = useRef(null);
  const spanRef = useRef(null); /*PARA QUE HAGA SCROLL EL PGN */

  function cargarPgn(pgnTexto) {
    const chess = new Chess();
    chess.loadPgn(pgnTexto);

    const historial = chess.history({ verbose: true });
    const tempChess = new Chess();
    const nuevasPosiciones = [tempChess.fen()];
    const nuevosRangos = [null]; // posición 0 = antes de la primera jugada

    let puntero = 0;
    historial.forEach((jugada) => {
      tempChess.move(jugada.san);
      nuevasPosiciones.push(tempChess.fen());

      const inicio = pgnTexto.indexOf(jugada.san, puntero);
      if (inicio !== -1) {
        const fin = inicio + jugada.san.length;
        nuevosRangos.push({ inicio, fin });
        puntero = fin;
      } else {
        nuevosRangos.push(null);
      }
    });

    setPosiciones(nuevasPosiciones);
    setRangosJugadas(nuevosRangos);
    setJugadaActual(0);
  }

  const searchParams = useSearchParams();

  useEffect(() => {
    const pgnDeUrl = searchParams.get("pgn");
    if (pgnDeUrl) {
      setPgn(pgnDeUrl);
      cargarPgn(pgnDeUrl);
    }
  }, [searchParams]);

  const chessboardOptions = {
    position: posiciones[jugadaActual],
  };

  // overlay para mostrar la jugada resaltada porque el textarea no me toma nada
  function renderTextoResaltado() {
    const rango = rangosJugadas[jugadaActual];
    if (!rango) return pgn;

    const antes = pgn.slice(0, rango.inicio);
    const jugada = pgn.slice(rango.inicio, rango.fin);
    const despues = pgn.slice(rango.fin);

    return (
      <>
        {antes}
        <span ref={spanRef} className="jugadaResaltada">{jugada}</span>
        {despues}
      </>
    );
  }

  // Para que haga scroll en el overlay a medida que avanzo o retrocedo jugadas
  useEffect(() => {
    if (spanRef.current && highlightRef.current && textareaRef.current) {
      spanRef.current.scrollIntoView({ block: "nearest", inline: "nearest" });
      textareaRef.current.scrollTop = highlightRef.current.scrollTop;
      textareaRef.current.scrollLeft = highlightRef.current.scrollLeft;
    }
  }, [jugadaActual]);

  //al pgn le tengo que mandar el mismo tamaño y tipo de fuente en el overlay y el textarea sino me queda cualquier cosa

  // Navegación con las flechas del teclado (izquierda = anterior, derecha = siguiente)
  useEffect(() => {
    function manejarTecla(e) {

      if (document.activeElement === textareaRef.current) return;

      if (e.key === "ArrowLeft") {
        setJugadaActual((j) => Math.max(0, j - 1));
      } else if (e.key === "ArrowRight") {
        setJugadaActual((j) =>
          Math.min(posiciones.length - 1, j + 1)
        );
      }
    }

    window.addEventListener("keydown", manejarTecla);
    return () => window.removeEventListener("keydown", manejarTecla);
  }, [posiciones.length]);

  function sincronizarScroll() {
    if (highlightRef.current && textareaRef.current) {
      highlightRef.current.scrollTop = textareaRef.current.scrollTop;
      highlightRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  }

  return (
    <main className="tableroContainer">
      <h1>Tablero</h1>

      <div className="pgnWrapper">
        <div ref={highlightRef} className="pgnHighlight">
          {renderTextoResaltado()}
        </div>
        <textarea
          ref={textareaRef}
          className="pgnInput"
          value={pgn}
          onChange={(e) => setPgn(e.target.value)}
          onScroll={sincronizarScroll}
          placeholder="Pegá el PGN acá"
          rows={4}
        />
      </div>
<button
  type="button"
  disabled={!pgn.trim()}
  onClick={() => navigator.clipboard.writeText(pgn)}
  className="btn-copiar-pgn"
>
  Copiar PGN
</button>


      <button onClick={() => cargarPgn(pgn)}>Cargar partida</button>

      {posiciones.length > 0 && (
        <>
          <div className="boardWrapper">
            <Chessboard options={chessboardOptions} />
          </div>
          <div className="botonesNav">
            <button
              className="tableroBtn"
              onClick={() => setJugadaActual((j) => Math.max(0, j - 1))}
              disabled={jugadaActual === 0}
            >
              Anterior
            </button>
            <button
              className="tableroBtn"
              onClick={() =>
                setJugadaActual((j) => Math.min(posiciones.length - 1, j + 1))
              }
              disabled={jugadaActual === posiciones.length - 1}
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </main>
  );
}