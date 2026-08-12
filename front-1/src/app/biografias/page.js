"use client";

import { useState } from "react";

const jugadores = [
  { nombre: "Paul Morphy", nombreWikipedia: "Paul_Morphy" },
  { nombre: "Adolf Anderssen", nombreWikipedia: "Adolf_Anderssen" },
  { nombre: "Wilhelm Steinitz", nombreWikipedia: "Wilhelm_Steinitz" },
  { nombre: "Frank James Marshall", nombreWikipedia: "Frank_James_Marshall" },
  { nombre: "Emanuel Lasker", nombreWikipedia: "Emanuel_Lasker" },
  { nombre: "Siegbert Tarrasch", nombreWikipedia: "Siegbert_Tarrasch" },
  { nombre: "Joseph Blackburne", nombreWikipedia: "Joseph_Henry_Blackburne" },
  { nombre: "Richard Reti", nombreWikipedia: "Richard_Réti" },
  { nombre: "Savielly Tartakower", nombreWikipedia: "Savielly_Tartakower" },
  { nombre: "Reuben Fine", nombreWikipedia: "Reuben_Fine" },
  { nombre: "Aron Nimzowitsch", nombreWikipedia: "Aron_Nimzowitsch" },
  { nombre: "Mikhail Chigorin", nombreWikipedia: "Mijaíl_Chigorin" },
  { nombre: "José Raúl Capablanca", nombreWikipedia: "José_Raúl_Capablanca" },
  { nombre: "Vasily Panov", nombreWikipedia: "Vasily_Panov", idioma: "en" },
  { nombre: "Alexander Alekhine", nombreWikipedia: "Alexander_Alekhine" },
  { nombre: "Ludek Pachman", nombreWikipedia: "Ludek_Pachman" },
  { nombre: "Evgeny Znosko Borovsky", nombreWikipedia: "Eugene_Znosko-Borovsky" },
  { nombre: "Yuri Averbach", nombreWikipedia: "Yuri_Averbaj" },
  { nombre: "Max Euwe", nombreWikipedia: "Max_Euwe" },
  { nombre: "Salo Flohr", nombreWikipedia: "Salo_Flohr" },
  { nombre: "Miguel Najdorf", nombreWikipedia: "Miguel_Najdorf" },
  { nombre: "Samuel Reshevsky", nombreWikipedia: "Samuel_Reshevsky" },
  { nombre: "Vasily Smyslov", nombreWikipedia: "Vasili_Smyslov" },
  { nombre: "Paul Keres", nombreWikipedia: "Paul_Keres" },
  { nombre: "Aleksandr Kotov", nombreWikipedia: "Alexander_Kotov" },
  { nombre: "Gideon Stahlberg", nombreWikipedia: "Gideon_Ståhlberg" },
  { nombre: "Rudolf Spielmann", nombreWikipedia: "Rudolf_Spielmann" },
  { nombre: "David Bronstein", nombreWikipedia: "David_Bronstein" },
  { nombre: "Mikhail Botvinnik", nombreWikipedia: "Mijaíl_Botvinnik" },
  { nombre: "Isaak Boleslavski", nombreWikipedia: "Isaak_Boleslavski" },
  { nombre: "Tigran Petrosian", nombreWikipedia: "Tigran_Petrosián" },
  { nombre: "Efim Geller", nombreWikipedia: "Yefim_Géler" },
  { nombre: "Laszlo Szabo", nombreWikipedia: "László_Szabó" },
  { nombre: "Svetozar Gligoric", nombreWikipedia: "Svetozar_Gligorić" },
  { nombre: "Mark Taimanov", nombreWikipedia: "Mark_Taimánov" },
  { nombre: "Boris Spassky", nombreWikipedia: "Borís_Spaski" },
  { nombre: "Viktor Korchnoi", nombreWikipedia: "Víktor_Korchnói" },
  { nombre: "Robert James Fischer", nombreWikipedia: "Bobby_Fischer" },
  { nombre: "Akiba Rubinstein", nombreWikipedia: "Akiba_Rubinstein" },
  { nombre: "Efim Bogoljubov", nombreWikipedia: "Yefim_Bogoliúbov" },
  { nombre: "Ian Timman", nombreWikipedia: "Jan_Timman" },
  { nombre: "John Nunn", nombreWikipedia: "John_Nunn" },
  { nombre: "Boris Gelfand", nombreWikipedia: "Borís_Gélfand" },
  { nombre: "Vasily Ivanchuk", nombreWikipedia: "Vasili_Ivanchuk" },
  { nombre: "Anatoly Karpov", nombreWikipedia: "Anatoli_Kárpov" },
  { nombre: "Nigel Short", nombreWikipedia: "Nigel_Short" },
  { nombre: "Bent Larsen", nombreWikipedia: "Bent_Larsen" },
  { nombre: "Mikhail Tal", nombreWikipedia: "Mijaíl_Tal" },
  { nombre: "Vladimir Kramnik", nombreWikipedia: "Vladímir_Krámnik" },
  { nombre: "Garry Kaspárov", nombreWikipedia: "Garri_Kaspárov" },
  { nombre: "Ruslan Ponomariov", nombreWikipedia: "Ruslán_Ponomariov" },
  { nombre: "Viswanathan Anand", nombreWikipedia: "Viswanathan_Anand" },
  { nombre: "Veselin Topalov", nombreWikipedia: "Veselin_Topalov" },
  { nombre: "Magnus Carlsen", nombreWikipedia: "Magnus_Carlsen" },
  { nombre: "Alexei Shirov", nombreWikipedia: "Alekséi_Shírov" },
  { nombre: "Fabiano Caruana", nombreWikipedia: "Fabiano_Caruana" },
  { nombre: "Ian Nepomniachtchi", nombreWikipedia: "Yan_Nepómniashchi" },
  { nombre: "Dommaraju Gukesh", nombreWikipedia: "Gukesh_D" },
  { nombre: "Ding Liren", nombreWikipedia: "Ding_Liren" },
  { nombre: "Alireza Firouzja", nombreWikipedia: "Alireza_Firouzja" },
  { nombre: "Richard Rapport", nombreWikipedia: "Richard_Rapport" },
  { nombre: "Hikaru Nakamura", nombreWikipedia: "Hikaru_Nakamura" },
  { nombre: "Peter Svidler", nombreWikipedia: "Peter_Svidler" },
  { nombre: "Alexander Morozevich", nombreWikipedia: "Aleksandr_Morozévich" },
  { nombre: "Rustam Kasimdzhanov", nombreWikipedia: "Rustam_Kasimdzhanov" },
  { nombre: "Michael Adams", nombreWikipedia: "Michael_Adams" },
  { nombre: "Peter Leko", nombreWikipedia: "Peter_Leko" },
  { nombre: "Judit Polgar", nombreWikipedia: "Judit_Polgár" },
  { nombre: "Alexander Grischuk", nombreWikipedia: "Aleksandr_Grischuk" },
  { nombre: "Levon Aronian", nombreWikipedia: "Levon_Aronian" },
  { nombre: "Teimur Radjabov", nombreWikipedia: "Teimour_Radjabov" },
  { nombre: "Sergei Karjakin", nombreWikipedia: "Serguéi_Kariakin_(ajedrecista)" },
  { nombre: "Wesley So", nombreWikipedia: "Wesley_So" },
  { nombre: "Anish Giri", nombreWikipedia: "Anish_Giri" },
  { nombre: "Shakhriyar Mamedyarov", nombreWikipedia: "Shakhriyar_Mamedyarov" },
];

const jugadoresOrdenados = [...jugadores].sort((a, b) => {
  const apellidoA = a.nombre.split(" ").pop();
  const apellidoB = b.nombre.split(" ").pop();
  return apellidoA.localeCompare(apellidoB);
});

export default function Biografias() {
  const [jugadorAbierto, setJugadorAbierto] = useState(null);
  const [biografias, setBiografias] = useState({});
  const [cargando, setCargando] = useState(null);

  async function toggleJugador(jugador) {
    if (jugadorAbierto === jugador.nombre) {
      setJugadorAbierto(null);
      return;
    }

    setJugadorAbierto(jugador.nombre);

    if (biografias[jugador.nombre]) return;

    setCargando(jugador.nombre);
    try {
      const idioma = jugador.idioma || "es";
      const res = await fetch(
        `https://${idioma}.wikipedia.org/api/rest_v1/page/summary/${jugador.nombreWikipedia}`
      );

      if (!res.ok) throw new Error("No se encontró la biografía");
      const data = await res.json();
      setBiografias((prev) => ({ ...prev, [jugador.nombre]: data }));
    } catch (error) {
      setBiografias((prev) => ({
        ...prev,
        [jugador.nombre]: { extract: "No se pudo cargar la biografía." },
      }));
    } finally {
      setCargando(null);
    }
  }

  return (
    <main>
      <h1>Biografías</h1>
      <ul className="lista-biografias">
        {jugadoresOrdenados.map((jugador) => (
          <li key={jugador.nombre} className="jugador-item">
            <button
              className={`jugador-toggle${
                jugadorAbierto === jugador.nombre ? " abierto" : ""
              }`}
              onClick={() => toggleJugador(jugador)}
            >
              {jugador.nombre}
            </button>

            {jugadorAbierto === jugador.nombre && (
              <div className="jugador-bio">
                {cargando === jugador.nombre && <p>Cargando...</p>}
                {biografias[jugador.nombre] && (
                  <>
                    {biografias[jugador.nombre].thumbnail && (
                      <img
                        className="jugador-foto"
                        src={biografias[jugador.nombre].thumbnail.source}
                        alt={jugador.nombre}
                        width={100}
                      />
                    )}
                    <p className="jugador-extracto">
                      {biografias[jugador.nombre].extract}
                    </p>
                  </>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}