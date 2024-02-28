import React from 'react'

const Card = ({nombre, musica}) => {
  return (
    <div style={{
      width: '200px',
      height: '230px',
      backgroundColor: '#F27979',
      borderRadius: '5px',
      margin: '10px',
      padding: '10px',
      margin: 'auto',
      marginTop: 'auto',
      
    }}>
      <h3>Hola! {nombre}</h3>
      <h3>Colocaremos más música: {musica}, en nuestras clases.</h3>
      <p>Gracias por contestar esta encuesta.</p>
    </div>
  )
}

export default Card
