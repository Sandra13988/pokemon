import { useEffect, useState } from 'react'

import { usePokemonInfoQuery } from '../../Queries/Pokemon/info'; // Query que saca la info basica de un pokemon 
import { usePokemonInfoMasQuery } from '../../Queries/Pokemon/infoMas'; // Query que saca info completa de un pokemon
import { usePokemonEvolucion } from '../../Queries/Pokemon/cadenaEvolutiva'; // Query para sacar la cadena evolutiva de un pokemon
import { Evoluciones } from './MostrarEvoluciones' //componente que imprime el banner de las evoluciones
import { useNavigate, Link, useParams } from 'react-router-dom'



export const Detalle = ({  handleClickPokemon }) => {
  const { id } = useParams();
  
  const { isLoading: isLoadingInfo, isError: isInfoError, data: infoData, error: infoError, refetch: refetchInfo} = usePokemonInfoQuery(id && id)
  const { isLoading: isLoadingInfoMas, isError: isInfoMasError, data: infoMasData, error: infoMasError, refetch: refetchInfoMas  } = usePokemonInfoMasQuery(id && id)
 

  console.log(id)
  console.log(infoData)
  console.log(infoMasData)
  

  // const url_evolucion = data1.evolution_chain.url

  if(isLoadingInfo || isLoadingInfoMas){
    return <h3>Cargando...</h3>
  }

  if (isInfoError || isInfoMasError || !infoData || !infoMasData ){
    return <h3>Ha habido un error...{infoError.message || infoMasError.message}</h3>
  }

  return (
    <>

      
        <div>
          <h3>Nº #{infoData.id}</h3>
          <img src={infoMasData.sprites.front_default} />
          <h3>Nombre: {infoData.name.toUpperCase()}</h3>
          <h3>Tipo: {infoMasData.types.map(type => type.type.name).join(", ")}</h3>
          <h3>Altura: {infoMasData.height/10+" m"}</h3>
          <h3>Peso: {infoMasData.weight/10+" Kg"}</h3>

          {/* //Filtro de frases en español y solo de una version, en este caso X porque parece que es donde estan todas las descripciones en español*/}
          {infoData.flavor_text_entries
            .filter(frases => frases.language.name === "es" && frases.version.name === "x")
            .map((frase, index) => (
              <h3 key={index}>Descripción: {frase.flavor_text}</h3>
            ))
            }
        </div>
      

      <Evoluciones url={infoData.evolution_chain.url} nombre={infoData.name} handleClickPokemon={handleClickPokemon} />
    </>
  )
}