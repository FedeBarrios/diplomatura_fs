 
 "use client";

import { useState } from "react";

 
 
 export default function Libros() {

  const libros = [

    {id:1,
      titulo: "Aperturas Abiertas",
      autor: "Max Euwe",
      editorial: "Ediciones limitadas Catalán",
      imagen: "/images/aperturas-abiertas-euwe.png",
      categoria: "aperturas",
      subcategoria: "abiertas",
      reseña: "Un conocido libro de ajedrez escrito por el quinto campeón mundial Max Euwe, enfocado en el estudio teórico y estratégico de las partidas que comienzan con 1.e4 e5. Esta obra forma parte de las clásicas series de enseñanza de aperturas del autor holandés."
    },

{id:2,
      titulo: "Cómo jugar las aperturas abiertas",
      autor: "Anatoli Karpov",
      editorial: "Ediciones Zugarto",
      imagen: "/images/aperturas-abiertas-karpov.png",
      categoria: "aperturas",
      subcategoria: "abiertas",
      reseña: "Jugar las aperturas abiertas (1.e4 e5) al estilo de Anatoly Karpov significa priorizar la profilaxis, la solidez y el control posicional sobre el ataque directo o los sacrificios especulativos."
    },
         
{id: 3,
      titulo: "Aperturas abiertas",
      autor: "Ludek Pachman",
      editorial: "Editorial Martinez Roca",
      imagen: "/images/aperturas-abiertas-pachman.png",
      categoria: "aperturas",
      subcategoria: "abiertas",
      reseña: "Un clásico libro de ajedrez escrito por el Gran Maestro Ludek Pachman. Forma parte de su famosa serie sobre la teoría moderna del juego."
    },
   
{id:4,
      titulo: "Curso de aperturas abiertas",
      autor: "Vasily Panov",
      editorial: "Editorial Martinez Roca",
      imagen: "/images/aperturas-abiertas-panov.png",
      categoria: "aperturas",
      subcategoria: "abiertas",
      reseña: "Un clásico libro de ajedrez escrito por los maestros soviéticos Vasili N. Panov y Yakov Estrin. Forma parte de la famosa colección de teoría ajedrecística orientada a explicar los planes estratégicos y tácticos desde la jugada inicial."
    },
    
{id:5,
      titulo: "Cómo jugar las aperturas cerradas",
      autor: "Anatoli Karpov",
      editorial: "Ediciones Zugarto",
      imagen: "/images/aperturas-cerradas-karpov.png",
      categoria: "aperturas",
      subcategoria: "cerradas",
      reseña: "Jugar las aperturas cerradas al estilo de Anatoli Karpov significa dominar la profilaxis, el juego posicional lento y la acumulación de pequeñas ventajas. Se basan en controlar las casillas clave sin prisa, prevenir los planes del rival y exprimir debilidades a largo plazo."
    },
      
{id: 6,
      titulo: "Aperturas cerradas",
      autor: "Ludek Pachman",
      editorial: "Editorial Martinez Roca",
      imagen: "/images/aperturas-cerradas-pachman.png",
      categoria: "aperturas",
      subcategoria: "cerradas",
      reseña: "Un famoso libro de ajedrez escrito por el maestro Ludek Pachman. El texto explica las estrategias y planes de juego para partidas que empiezan con movimientos diferentes a 1.e4"
    },
    
{id: 7,
      titulo: "Curso de aperturas cerradas",
      autor: "Vasily Panov",
      editorial: "Editorial Martinez Roca",
      imagen: "/images/aperturas-cerradas-panov.png",
      categoria: "aperturas",
      subcategoria: "cerradas",
      reseña: "El Curso de Aperturas Cerradas de Vasili Panov y Yakov Estrin es un libro clásico de ajedrez escrito en español (con ediciones populares como la de 1980 por Ediciones Martínez Roca) que enseña estrategias para partidas que no empiezan con el peón de rey."
    },

{id: 8,
      titulo: "Aperturas semiabiertas",
      autor: "Max Euwe",
      editorial: "Ediciones limitadas Catalán",
      imagen: "/images/aperturas-semiabiertas-euwe.png",
      categoria: "aperturas",
      subcategoria: "semiabiertas",
      reseña: "un famoso tratado didáctico de ajedrez que analiza las respuestas negras a 1.e4 distintas a 1...e5, destacando defensas como la Siciliana, la Caro-Kann y la Francesa."
    },
   
{id: 9,
      titulo: "Cómo jugar las aperturas semiabiertas",
      autor: "Anatoli Karpov",
      editorial: "Ediciones Zugarto",
      imagen: "/images/aperturas-semiabiertas-karpov.png",
      categoria: "aperturas",
      subcategoria: "semiabiertas",
      reseña: "Jugar las aperturas semiabiertas al estilo de Anatoli Karpov significa dominar la Defensa Caro-Kann, la Defensa Francesa y la Defensa Siciliana con una profunda comprensión posicional, priorizando la solidez, la armonía de las piezas y la explotación de pequeñas debilidades del rival."
    },
   
{id:10,
      titulo: "Aperturas semiabiertas",
      autor: "Ludek Pachman",
      editorial: "Editorial Martinez Roca",
      imagen: "/images/aperturas-semiabiertas-pachman.png",
      categoria: "aperturas",
      subcategoria: "semiabiertas",
      reseña: "Un clásico libro de ajedrez escrito por el Gran Maestro checoslovaco Luděk Pachman, parte de su serie sobre teoría moderna. La obra analiza las defensas del negro tras 1.e4 que no son 1...e5, como la Francesa, la Caro-Kann y otras."
    },
   
{id:11,
      titulo: "Curso de aperturas semiabiertas",
      autor: "Vasily Panov",
      editorial: "Editorial Martinez Roca",
      imagen: "/images/aperturas-semiabiertas-panov.png",
      categoria: "aperturas",
      subcategoria: "semiabiertas",
      reseña: "Un famoso libro clásico de ajedrez escrito por el maestro soviético Vasili N. Panov y revisado por Yakov Estrin. Esta obra enseña la teoría y los planes estratégicos de defensas como la Siciliana, la Francesa y la Caro-Kann."
    },
    
{id:12,
      titulo: "Cómo jugar las aperturas semicerradas",
      autor: "Anatoli Karpov",
      editorial: "Ediciones Zugarto",
      imagen: "/images/aperturas-semicerradas-karpov.png",
      categoria: "aperturas",
      subcategoria: "semicerradas",
      reseña: "Jugar las aperturas semicerradas al estilo de Anatoli Kárpov significa priorizar la flexibilidad, el control posicional, la profilaxis y la paciencia antes que los ataques tácticos violentos. Los pilares de este enfoque se centran en dominar las casillas clave, asfixiar la iniciativa del rival y aprovechar pequeñas ventajas acumulativas."
    },
   
{id: 13,
      titulo: "Teoría de los finales de partida",
      autor: "Yuri Averbach",
      editorial: "Editorial Martinez Roca",
      imagen: "/images/finales-averbach.png",
      categoria: "finales",
      subcategoria: null,
      reseña: "La Teoría de los finales de partida del gran maestro Yuri Averbach es una guía clásica y fundamental del ajedrez que enseña los mates elementales, el combate entre piezas y los finales prácticos."
    },
   
{id: 14,
      titulo: "Manual de finales",
      autor: "Mark Dvoretsky",
      editorial: "Editorial Martinez Roca",
      imagen: "/images/finales-dvoretsky.png",
      categoria: "finales",
      subcategoria: null,
      reseña: "El Manual de finales de Dvoretsky es ampliamente considerado como el mejor y más completo libro moderno sobre finales de ajedrez. Fue escrito por el célebre entrenador ruso Mark Dvoretsky."
    },
    
{id:15,
      titulo: "Finales básicos de ajedrez",
      autor: "Reuben Fine",
      editorial: "Editorial Sopena",
      imagen: "/images/finales-fine.png",
      categoria: "finales",
      subcategoria: null,
      reseña: "Un libro clásico escrito por el Gran Maestro Reuben Fine y publicado en 1941. Es una guía muy famosa que ordena y explica cómo terminar las partidas de ajedrez de forma correcta."
    },

{id:16,
      titulo: "Mis finales favoritos",
      autor: "Anatoli Karpov",
      editorial: "Ediciones Zugarto",
      imagen: "/images/finales-karpov.png",
      categoria: "finales",
      subcategoria: null,
      reseña: "Un famoso libro de ajedrez escrito por el campeón mundial Anatoli Karpov y Evgeni Gik en 1992. La obra analiza finales de partidas reales y composiciones artísticas que destacan por su gran valor táctico y posicional."
    },
 
{id:17,
      titulo: "Práctica de los finales en ajedrez",
      autor: "Ludek Pachman",
      editorial: "Editorial Martinez Roca",
      imagen: "/images/finales-pachman.png",
      categoria: "finales",
      subcategoria: null,
      reseña: "Un clásico libro escrito por el Gran Maestro Ludek Pachman que enseña cómo jugar la última parte de la partida. La obra explica que esta fase necesita un estudio estratégico real y no solo memoria de las aperturas."
    },
   
{id:18,
      titulo: "Cómo conducir los finales",
      autor: "Evgeny Znosko Borovsky",
      editorial: "Editorial Martinez Roca",
      imagen: "/images/finales-znosko-borovsky.png",
      categoria: "finales",
      subcategoria: null,
      reseña: "Conducir los finales según el clásico libro de Eugenio Znosko-Borovsky significa entender el valor de las piezas, el uso del rey y la creación de peones pasados."
    },
    
{id: 19,
      titulo: "Ajedrez de los grandes maestros jugada a jugada",
      autor: "John Nunn",
      editorial: "Editorial La casa del Ajedrez",
      imagen: "/images/ajedrez-nunn.png",
      categoria: "tactica-estrategia",
      subcategoria: null,
      reseña: "El análisis jugada a jugada de las partidas magistrales se centra en explicar con palabras sencillas las decisiones de los expertos, tal como ocurre en el célebre libro del Gran Maestro John Nunn. Esta técnica de estudio enseña los planes ocultos detrás de cada movimiento en el tablero."
    },
 
{id: 20,
      titulo: "Claves del ajedrez práctico",
      autor: "John Nunn",
      editorial: "Editorial La casa del Ajedrez",
      imagen: "/images/claves-nunn.png",
      categoria: "tactica-estrategia",
      subcategoria: null,
      reseña: "Un libro de ajedrez enfocado en mejorar los resultados reales en el tablero mediante consejos útiles sobre cálculo, aperturas, y finales, sin necesidad de memorizar enciclopedias enteras."
    },
   
{id: 21,
      titulo: "La estrategia en el ajedrez",
      autor: "Anatoli Karpov",
      editorial: "Editorial Hispano Europea",
      imagen: "/images/estrategia-karpov.png",
      categoria: "tactica-estrategia",
      subcategoria: null,
      reseña: "Este libro presenta un metodo que ayuda a razonar con logica en el momento de valorar la posición y trazar un plan óptimo. Se exponen siete criterios basicos: La estructura de peones, las lineas abiertas, el centro y el espacio, etc., que permiten determinar con exactitud el caracter del juego, y se ilustran con numerosas partidas y estudios."
    },
    
{id:22,
      titulo: "Estrategia y táctica en el ajedrez",
      autor: "Max Euwe",
      editorial: "Editorial Sopena",
      imagen: "/images/estrategia-y-tactica-euwe.png",
      categoria: "tactica-estrategia",
      subcategoria: null,
      reseña: "Un famoso libro del ex campeón mundial Max Euwe que funciona como continuación de sus obras didácticas, enfocándose en clasificar los elementos combinativos y el juego táctico sobre una base posicional sólida."
    },
    
{id: 23,
      titulo: "Estrategia moderna en el ajedrez",
      autor: "Ludek Pachman",
      editorial: "Editorial Martinez Roca",
      imagen: "/images/estrategia-moderna-pachman.png",
      categoria: "tactica-estrategia",
      subcategoria: null,
      reseña: "Esta obra del famoso maestro Ludek Pachman constituye un libro único en su clase. La estrategia moderna en ajedrez vista desde el alto observatorio del gran maestro, escrita en forma popular y hecha accesible al aficionado en un lenguaje fácil de comprender, es el hito más sobresaliente de esta nueva publicación."
    },
      
{id:24,
      titulo: "El medio juego en ajedrez",
      autor: "Reuben Fine",
      editorial: "Editorial Sopena",
      imagen: "/images/medio-juego-fine.png",
      categoria: "tactica-estrategia",
      subcategoria: null,
      reseña: "Un famoso libro clásico escrito por el Gran Maestro y psicólogo estadounidense Reuben Fine. La obra funciona como una guía profunda y sistemática sobre la fase más compleja de la partida, abordando los planes, la combinación y la evaluación de posiciones."
    },
   
{id:25,
      titulo: "El medio juego en ajedrez",
      autor: "Evgeny Znosko Borovsky",
      editorial: "Editorial Martinez Roca",
      imagen: "/images/medio-juego-znosko-borovsky.png",
      categoria: "tactica-estrategia",
      subcategoria: null,
      reseña: "Un famoso libro clásico escrito por el maestro y entrenador Eugenio Znosko Borovsky. La obra analiza cómo evaluar posiciones complejas, estudiar la transición entre fases y manejar ventajas o desventajas."
    },

    {id:26,
      titulo: "Táctica moderna en ajedrez. Tomo 1",
      autor: "Ludek Pachman",
      editorial: "Editorial Martinez Roca",
      imagen: "/images/tactica-moderna-pachman.png",
      categoria: "tactica-estrategia",
      subcategoria: null,
      reseña: "Famosa obra en dos tomos escrita por el Gran Maestro checoslovaco Luděk Pachman, la cual enseña a coordinar piezas, calcular combinaciones y comprender los motivos tácticos del juego medio."
    },

    {id:27,
      titulo: "Táctica moderna en ajedrez. Tomo 2",
      autor: "Ludek Pachman",
      editorial: "Editorial Martinez Roca",
      imagen: "/images/tactica-moderna2-pachman.png",
      categoria: "tactica-estrategia",
      subcategoria: null,
      reseña: "Famosa obra en dos tomos escrita por el Gran Maestro checoslovaco Luděk Pachman, la cual enseña a coordinar piezas, calcular combinaciones y comprender los motivos tácticos del juego medio."
    },

    {id:28,
      titulo: "El ajedrez de torneo. Candidatos Zurich 1953",
      autor: "David Bronstein",
      editorial: "Editorial La casa del Ajedrez",
      imagen: "/images/candidatos-1953-bronstein.png",
      categoria: "fundamentales",
      subcategoria: null,
      reseña: "Libro clásico escrito por el Gran Maestro soviético David Bronstein, que analiza con gran sensibilidad y estilo artístico las 210 partidas del histórico Torneo de Candidatos de Zúrich 1953."
    },

    {id:29,
      titulo: "Piense como un gran maestro",
      autor: "Alexander Kotov",
      editorial: "Editorial La casa del Ajedrez",
      imagen: "/images/piense-kotov.png",
      categoria: "fundamentales",
      subcategoria: null,
      reseña: "Un libro clásico de ajedrez que enseña los movimientos candidatos, el árbol de análisis y la disciplina mental."
    },

    {id:30,
      titulo: "Juegue como un gran maestro",
      autor: "Alexander Kotov",
      editorial: "Editorial La casa del Ajedrez",
      imagen: "/images/juegue-kotov.png",
      categoria: "fundamentales",
      subcategoria: null,
      reseña: "Un clásico manual de ajedrez soviético que enseña a calcular con profundidad, analiza el proceso mental de los campeones y exige un nivel avanzado de estudio."
    },

    {id:31,
      titulo: "Entrene como un gran maestro",
      autor: "Alexander Kotov",
      editorial: "Editorial La casa del Ajedrez",
      imagen: "/images/entrene-kotov.png",
      categoria: "fundamentales",
      subcategoria: null,
      reseña: "Libro póstumo del soviético Alexander Kotov, el cierre de su famosa trilogía, y una obra clásica centrada en la metodología de entrenamiento y el esfuerzo personal."
    },

    {id: 32,
      titulo: "Mi sistema",
      autor: "Aron Nimzowitsch",
      editorial: "Editorial La casa del Ajedrez",
      imagen: "/images/mi-sistema-nimzowitsch.png",
      categoria: "fundamentales",
      subcategoria: null,
      reseña: "Un libro de teoría del ajedrez escrito por Aron Nimzowitsch. Originalmente de una serie de cinco dípticos de 1925 a 1927, el libro —una de las primeras obras sobre el hipermodernismo— introdujo muchos nuevos conceptos a los seguidores de la escuela moderna de pensamiento. Es generalmente considerado como uno de los libros de ajedrez más importantes de todos los tiempos."
    },

    {id:33,
      titulo: "La práctica de mi sistema",
      autor: "Aron Nimzowitsch",
      editorial: "Editorial La casa del Ajedrez",       
      imagen: "/images/practica-de-mi-sistema-nimzowitsch.png",
      categoria: "fundamentales",
      subcategoria: null,
      reseña: "El complemento práctico del famoso tratado de ajedrez escrito por el maestro Aron Nimzowitsch, enfocado en tres conceptos clave: profilaxis, centralización y bloqueo."
    },

    {id:34,
      titulo: "Fundamentos del ajedrez",
      autor: "José Raúl Capablanca",
      editorial: "Editorial La casa del Ajedrez",
      imagen: "/images/fundamentos-capablanca.png",
      categoria: "fundamentales",
      subcategoria: null,
      reseña: "Una obra clásica esencial para jugadores que ya conocen las reglas básicas y buscan progresar. Escrito por el excampeón mundial cubano, el libro destaca por su claridad pedagógica, abarcando desde finales básicos hasta partidas comentadas por el propio autor."
    },

    {id:35,
      titulo: "Lecciones elementales de ajedrez",
      autor: "José Raúl Capablanca",
      editorial: "Editorial La casa del Ajedrez",
      imagen: "/images/lecciones-elementales-capablanca.png",
      categoria: "fundamentales",
      subcategoria: null,
      reseña: "Una obra clásica fundamental que recopila lecciones radiofónicas impartidas desde Nueva York. El libro destaca por su claridad y sencillez, enseñando que la visión del final de partida debe planearse desde la apertura."
    },
    
  
    {id:36,
      titulo: "Manual de ajedrez",
      autor: "Emanuel Lasker",
      editorial: "Editorial Planeta",
      imagen: "/images/manual-ajedrez-lasker.png",
      categoria: "fundamentales",
      subcategoria: null,
      reseña: "Obra maestra clásica que combina la técnica pura, la filosofía profunda y la psicología de la competición. Escrito por el segundo campeón mundial de la historia, el texto trasciende el formato de un simple manual de reglas para convertirse en una guía sobre cómo pensar durante una partida."
    },
  ]

 const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState(null);

  const categorias = [
    { slug: "aperturas", nombre: "Aperturas" },
    { slug: "tactica-estrategia", nombre: "Táctica y Estrategia" },
    { slug: "finales", nombre: "Finales" },
    { slug: "fundamentales", nombre: "Fundamentales" },
  ];

  const subcategoriasAperturas = [
    { slug: "abiertas", nombre: "Abiertas" },
    { slug: "cerradas", nombre: "Cerradas" },
    { slug: "semiabiertas", nombre: "Semiabiertas" },
    { slug: "semicerradas", nombre: "Semicerradas" },
  ];

  const librosFiltrados = libros.filter((libro) => {
    if (libro.categoria !== categoriaSeleccionada) return false;
    if (categoriaSeleccionada === "aperturas") {
      return libro.subcategoria === subcategoriaSeleccionada;
    }
    return true;
  });

  function volverAlInicio() {
    setCategoriaSeleccionada(null);
    setSubcategoriaSeleccionada(null);
  }

  function volverACategorias() {
    setSubcategoriaSeleccionada(null);
  }
 
   return (
    <main>
      <h1>Libros</h1>

      {/* Paso 1: elegir categoría */}
      {!categoriaSeleccionada && (
        <div className="categorias-botonera">
          {categorias.map((cat) => (
            <button
              key={cat.slug}
              className="categoria-btn"
              onClick={() => setCategoriaSeleccionada(cat.slug)}
            >
              {cat.nombre}
            </button>
          ))}
        </div>
      )}

      {/* Paso 2: elegir subcategoría (solo si es Aperturas) */}
      {categoriaSeleccionada === "aperturas" && !subcategoriaSeleccionada && (
        <>
          <button className="volver-btn" onClick={volverAlInicio}>
            ← Volver a categorías
          </button>

          <div className="categorias-botonera">
            {subcategoriasAperturas.map((sub) => (
              <button
                key={sub.slug}
                className="categoria-btn"
                onClick={() => setSubcategoriaSeleccionada(sub.slug)}
              >
                {sub.nombre}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Paso 3: grilla de libros */}
      {categoriaSeleccionada &&
        (categoriaSeleccionada !== "aperturas" || subcategoriaSeleccionada) && (
          <>
            <button
              className="volver-btn"
              onClick={
                categoriaSeleccionada === "aperturas"
                  ? volverACategorias
                  : volverAlInicio
              }
            >
              ← Volver
            </button>

            <div className="libros-grid">
              {librosFiltrados.map((libro) => (
                <article key={libro.id} className="libro-card">
                  <img src={libro.imagen} alt={libro.titulo} />
                  <h2>{libro.titulo}</h2>
                  <p className="libro-autor">{libro.autor}</p>
                  <p className="libro-editorial">{libro.editorial}</p>
                  <p className="libro-categoria">
                    {libro.categoria}
                    {libro.subcategoria && ` / ${libro.subcategoria}`}
                  </p>
                  <p className="libro-reseña">{libro.reseña}</p>
                </article>
              ))}
            </div>
          </>
        )}
    </main>
  );
}