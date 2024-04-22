import { useState } from 'react'
import './App.css'
import { Buscador } from './Buscador/Buscador'
import { Carrusel } from './Carrusel/Carrusel'
import { Carrusel2 } from './Carrusel/Carrusel2'
import { Listar } from './Listar/Listar'
import { Detalle } from './Detalle/Detalle'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


// const queryClient = new QueryClient()
function App() {

  const [urlDetalle, setUrlDetalle] = useState("")
  const [namePokemon, setNamePokemon] = useState("")


  //PARA IMPRIMIR LA EVOLUCION CUANDO LE HACES CLICK, LO PASA COMO UNDEFINED
  //CUANDO ESTÁ ENTRANDO EL MISMO TIPO DE OBJETO TANTO DE LA LISTA COMO DE EVOLUCIONES
  //{name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/'} -> Desde Evoluciones linea 74
  //{name: 'butterfree', url: 'https://pokeapi.co/api/v2/pokemon-species/12/'} -> Desde APP linea 31

  const handleClickPokemon =  ({pokemon}) => {
    console.log(pokemon)
      if(pokemon){
        setNamePokemon(pokemon.name)
        setUrlDetalle(pokemon.url)
      }
  }


  return (

    <>
      {/* <QueryClientProvider client={queryClient}> */}
        {/* <Buscador guardarPokemon={guardarPokemon}/> */}
        {/* <Carrusel/> */}
        {/* <Carrusel2/> */}
        <Listar handleClickPokemon={handleClickPokemon} />
        {namePokemon && <Detalle namePokemon={namePokemon} urlDetalle={urlDetalle} handleClickPokemon={handleClickPokemon}/>}
        {/* <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider> */}
    </>
  )
}

export default App
