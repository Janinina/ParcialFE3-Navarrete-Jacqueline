import React from "react"
import Card from './Card'
import { useState } from "react"

const btnStyle={
    backgroundColor: '#027368',  
    marginTop: '20px' ,
    marginBottom: '50px'   
}

const Form = () => {
    const[nombre, setNombre] = useState('')
    const[musica, setMusica] = useState('')    
    const[show, setShow] = useState(false)
    const[err, setErr] = useState(false)

    const handlerSubmit = (event) => {
        event.preventDefault()
        if(nombre.length > 3 && nombre.includes('') && musica.length > 6) {
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }S
    }

  return (
    <div>            
        <form onSubmit={handlerSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <label >Ingresa tú nombre: </label>
            <input type="text" onChange={(event) => setNombre(event.target.value)} disabled={show}/>
            <label >Género músical favorito: </label>
            <input type="text" onChange={(event) => setMusica(event.target.value)} disabled={show}/>
            <button style={btnStyle}>Registrar</button>
        </form>        

        {show && <Card nombre={nombre} musica={musica}/>}

        {err && <h4 style={{color: 'red'}}>Por favor chequea que la información sea correcta.</h4>}
    </div>
  )
}

export default Form
