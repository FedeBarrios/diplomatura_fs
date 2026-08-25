'use client'

import { useState } from 'react'

const initialForm = {
  nombre: '',
  email: '',
  telefono: '',
  mensaje: ''
}

export default function Formulario({ postUrl }) {
  const [sending, setSending] = useState(false)
  const [msg, setMsg] = useState('')
  const [formData, setFormData] = useState(initialForm)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMsg('')
    setSending(true)

    try {
      const rawResponse = await fetch(postUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const response = await rawResponse.json()

      setSending(false)
      setMsg(response.message)

      if (response.error === false) {
        setFormData(initialForm)
      }
    } catch (error) {
      setSending(false)
      setMsg('Ocurrió un error al enviar el mensaje')
    }
  }

  return (
    <div className="caja">
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Teléfono</label>
          <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
        </div>
        <div>
          <label>Mensaje</label>
          <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
        </div>
        <input type="submit" value="Enviar" disabled={sending} />
      </form>

      {sending ? <p>Enviando...</p> : null}
      {msg ? <p>{msg}</p> : null}
    </div>
    </div>
  )
}