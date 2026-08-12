

import './globals.css';
import Nav from '@/components/Nav';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h2>La Biblioteca del Ajedrez</h2>
        </header>

<Nav/>


        {children}

        <footer>Federico Barrios. Derechos reservados 2026</footer>
      </body>
    </html>
  );
}
