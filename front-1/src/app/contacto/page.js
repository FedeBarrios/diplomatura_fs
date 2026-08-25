import Formulario from '@/components/formulario'

export default function Contacto() {
  return (
    <main>
      <h1>Contáctanos</h1>
      <Formulario postUrl={`${process.env.API_BASE_URL}/api/contacto`} />
    </main>
  )
}