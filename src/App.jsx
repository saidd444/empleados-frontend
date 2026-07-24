import { useState, useEffect } from 'react'

function App() {
    const [personas, setPersonas] = useState([])

useEffect(() => {
    fetch('http://localhost:8080/personas')
        .then(response => response.json())
        .then(data => setPersonas(data))
}, [])

  return (
    <div>
      <h1>Empleados</h1>
    <table border = "1" cellPadding="10" style = {{borderCollapse: 'collapse', width: '100%'}}>
     <thead>
      <tr>
        <th>ID</th> 
        <th>Nombre</th> 
        <th>Direccion</th> 
        <th>Correo</th>
        </tr>
        </thead>
        <tbody>
        {personas.map(persona =>(
          <tr key={persona.id_empleado}>
            <td>{persona.id_empleado}</td>
            <td>{persona.nombre}</td>
            <td>{persona.direccion}</td>
            <td>{persona.correo}</td>
            </tr>
        ))} 
        </tbody>
        </table>
  </div>
  )
}

export default App