import React from 'react'
import { useContador } from '../hooks/useContador'

export const Contadores = () => {

    const {valor , aumentarValor , decrementarValor} = useContador(5);

  return (
    <>
      
       <h2>Contador con hook</h2>

       <div> El contador esta en un valor de: {valor}</div>

       <button 
        className='btn btn-info'
        onClick={() => aumentarValor(2)}>
                Aumentar
       </button>

       <button 
        className='mr-3 btn btn-danger'
        onClick={() => decrementarValor(2)}>
                Decrementar
       </button>
       
       

    </>
  )
}
