import Link from "next/link";

import { redirect } from "next/navigation";
import { obtenerPartidas, filtrarPartidas } from "@/lib/partidas";

async function buscarPartidas(formData) {
  "use server";

  const params = new URLSearchParams();
  const campos = ["blancas", "negras", "anio", "lugar", "blancasganan", "negrasganan", "tablas"];

  for (const campo of campos) {
    const valor = formData.get(campo);
    if (valor) params.set(campo, valor);
  }

  redirect(`/buscador?${params.toString()}`);
}

export default async function Buscador({ searchParams }) {
  const sp = await searchParams;
  const hayBusqueda = Object.keys(sp).length > 0;
  const resultados = hayBusqueda ? filtrarPartidas(sp, obtenerPartidas()) : null;

  return (
    <main>
      <h1>Buscador de partidas</h1>
      <div className="caja">
        <h2>Ingresar datos de la partida <br></br></h2>
        <div className="formulario">
          <form action={buscarPartidas}>
            <div>
              <label htmlFor="blancas">Blancas:</label>
              <input type="text" id="blancas" name="blancas" defaultValue={sp.blancas} />
            </div>
            <div>
              <label htmlFor="negras">Negras:</label>
              <input type="text" id="negras" name="negras" defaultValue={sp.negras} />
            </div>
            <div>
              <label htmlFor="anio">Año:</label>
              <input type="text" id="anio" name="anio" defaultValue={sp.anio} />
            </div>
            <div>
              <label htmlFor="lugar">Lugar:</label>
              <input type="text" id="lugar" name="lugar" defaultValue={sp.lugar} />
            </div>
            <div>
              <label>Resultado:</label>
              <div className="checkboxes">
                <label><input type="checkbox" name="blancasganan" defaultChecked={!!sp.blancasganan} /> Blancas ganan</label>
                <label><input type="checkbox" name="negrasganan" defaultChecked={!!sp.negrasganan} /> Negras ganan</label>
                <label><input type="checkbox" name="tablas" defaultChecked={!!sp.tablas} /> Tablas</label>
              </div>
            </div>
            <div><input type="submit" value="Buscar" /></div>
          </form>
        </div>
      </div>

      {resultados && (
        <div className="resultados">
          <h2>Resultados ({resultados.length})</h2>
          {resultados.length === 0 ? (
            <p>No se encontraron partidas con esos criterios.</p>
          ) : (

            <ul>
              {resultados.map((p, i) => (
                <li key={i}>
                  <Link href={`/tablero?pgn=${encodeURIComponent(p.pgn)}`}>
                    {p.blancas} vs {p.negras} — {p.lugar}, {p.anio} ({p.resultado})
                  </Link>
                </li>
              ))}
            </ul>

          )}
        </div>
      )}
    </main>
  );
}