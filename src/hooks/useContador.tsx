import React, { useState } from 'react'

export const useContador = (numeroInicial: number) => {
  
    const [valor, setvalor] = useState(numeroInicial);

    const aumentarValor = (numeroAumentar: number) => {

          setvalor(valor + numeroAumentar);

    }

    const decrementarValor = (numeroDecrementar: number) => {
      
          setvalor(valor - numeroDecrementar);
    }

    return {

        valor,
        aumentarValor,
        decrementarValor

    }
}
