import { useEffect, useState } from 'react'

import { usePokemonInfoQuery } from '../../Queries/Pokemon/info'; // Query que saca la info basica de un pokemon 
import { usePokemonInfoMasQuery } from '../../Queries/Pokemon/infoMas'; // Query que saca info completa de un pokemon
import { Evoluciones } from './Evoluciones' //componente que imprime el banner de las evoluciones
import { useParams } from 'react-router-dom'
import { MostrarDetalles } from './MostrarDetalles';



export const Detalle = ({   }) => {
  const { id } = useParams();
  
  const { isLoading: isLoadingInfo, isError: isInfoError, data: infoData, error: infoError} = usePokemonInfoQuery(id && id)
  const { isLoading: isLoadingInfoMas, isError: isInfoMasError, data: infoMasData, error: infoMasError  } = usePokemonInfoMasQuery(id && id)
 

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
        {MostrarDetalles( infoData, infoMasData)}
        <Evoluciones url={infoData.evolution_chain.url} nombre={infoData.name} />
    </>
  )
}