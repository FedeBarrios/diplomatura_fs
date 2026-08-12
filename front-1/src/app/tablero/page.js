import { Suspense } from "react"; //useSearchParms requiere meter el componente dentro de <Suspense> para renderizar 

import Tablero from "@/components/Tablero";

export default function TableroPage() {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <Tablero />
    </Suspense>
  );
}
