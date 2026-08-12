import Link from "next/link";


export default function Nav() {
    return (
        <nav>
            <ul className="holder">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/biografias">Biografías</Link></li>
                <li><Link href="/libros">Libros</Link></li>
                 <li><Link href="/buscador">Buscador de partidas</Link></li>
                <li><Link href="/tablero">Tablero</Link></li>
                <li><Link href="/contacto">Contáctanos</Link></li>
            </ul>
        </nav>

    );
}
