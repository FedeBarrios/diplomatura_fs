import fs from "fs";
import path from "path";
import { Chess } from "chess.js";

export function obtenerPartidas() {
  const filePath = path.join(process.cwd(), "data", "partidas.pgn");
  const contenido = fs.readFileSync(filePath, "utf-8");

  const bloques = contenido
    .split(/\n\s*\n(?=\[Event)/)
    .map((b) => b.trim())
    .filter(Boolean);

  const partidas = [];

bloques.forEach((pgn, index) => {
    try {
      const chess = new Chess();
      chess.loadPgn(pgn);
      const header = chess.header();

      partidas.push({
        blancas: header.White || "",
        negras: header.Black || "",
        anio: header.Date ? header.Date.split(".")[0] : "",
        lugar: header.Site || "",
        resultado: header.Result || "",
        pgn,
      });
    } catch (error) {
      
      const whiteMatch = pgn.match(/\[White "(.+?)"\]/);
      const blackMatch = pgn.match(/\[Black "(.+?)"\]/);
      console.error(
        `Error al parsear partida #${index + 1}:`,
        whiteMatch?.[1] || "?",
        "vs",
        blackMatch?.[1] || "?",
        "-",
        error.message
      );
    }
});

  return partidas;
}

export function filtrarPartidas(criterios, partidas) {
  let resultado = partidas;

  const blancas = criterios.blancas?.toLowerCase().trim();
  const negras = criterios.negras?.toLowerCase().trim();
  const anio = criterios.anio?.trim();
  const lugar = criterios.lugar?.toLowerCase().trim();

  if (blancas) resultado = resultado.filter((p) => p.blancas.toLowerCase().includes(blancas));
  if (negras) resultado = resultado.filter((p) => p.negras.toLowerCase().includes(negras));
  if (anio) resultado = resultado.filter((p) => p.anio === anio);
  if (lugar) resultado = resultado.filter((p) => p.lugar.toLowerCase().includes(lugar));

  if (criterios.blancasganan || criterios.negrasganan || criterios.tablas) {
    resultado = resultado.filter((p) => {
      if (criterios.blancasganan && p.resultado === "1-0") return true;
      if (criterios.negrasganan && p.resultado === "0-1") return true;
      if (criterios.tablas && p.resultado === "1/2-1/2") return true;
      return false;
    });
  }

  return resultado;
}