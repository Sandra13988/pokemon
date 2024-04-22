import { useEffect, useState } from 'react'

import { usePokemonInfoQuery } from '../Queries/Pokemon/info';
import { usePokemonInfoMasQuery } from '../Queries/Pokemon/infoMas';
import { usePokemonEvolucion } from '../Queries/Pokemon/evolucion';

// import { Evoluciones } from './Evoluciones';

export const Detalle = ({ namePokemon, urlDetalle }) => {



 //CREO QUE COGE LOS DATOS TARDE Y NO LOS CONSIGUE PASAR COMO PROP A LA SEGUNDA QUERY
  const { isLoading, isError, data: data1, error} = usePokemonInfoQuery(namePokemon, urlDetalle)
  const { data: data2 } = usePokemonInfoMasQuery(data1 && data1.name)
  const { data: data3 } = usePokemonEvolucion( namePokemon, data1 && data1.evolution_chain.url)
  
  

  // const url_evolucion = data1.evolution_chain.url

  if(isLoading){
    return <h3>Cargando...</h3>
  }

  if (isError){
    return <h3>Ha habido un error...{error.message}</h3>
  }

  return (
    <>

      
      {console.log(data1)}
      {data1 && data2 && data3 &&!isLoading && (
        <div>
          <h3>Nº #{data1.id}</h3>
          <img src={data2.sprites.front_default} />
          <h3>Nombre: {data1.name.toUpperCase()}</h3>
          <h3>Tipo: {data2.types.map(type => type.type.name).join(", ")}</h3>
          <h3>Altura: {data2.height/10+" m"}</h3>
          <h3>Peso: {data2.weight/10+" Kg"}</h3>

          {/* //Filtro de frases en español y solo de una version, en este caso X porque parece que es donde estan todas las descripciones en español*/}
          {data1.flavor_text_entries
            .filter(frases => frases.language.name === "es" && frases.version.name === "x")
            .map((frase, index) => (
              <h3 key={index}>Descripción: {frase.flavor_text}</h3>
            ))
            }
        </div>
      )}

      {/* <Evoluciones nombre={data1.evolution_chain.url}/> */}
    </>
  )
}