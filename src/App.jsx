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


  const [pokemon, setPokemon] = useState({})
  const [evoluciones, setEvoluciones] = useState({})
  const [urlDetalle, setUrlDetalle] = useState("")



  const guardarPokemon = (objetoPokemon) => {
    setPokemon(objetoPokemon)
  }

  //Trae toda el grupo evolutivo (Ejemplo id3: charmander, charmeleon y charizard)
  // chain.evolves_to.length = numero de evoluciones
  //chain.species = 1º pokemon,  chain.evolves_to[0].species = resto de pokemon
  const guardarEvoluciones = (objetoEvolucion) => {
    setEvoluciones(objetoEvolucion)
  }


  const handleClickPokemon = (url) => {
    setUrlDetalle(url)
  }


  return (

    <>
      {/* <QueryClientProvider client={queryClient}> */}
        {/* <Buscador guardarPokemon={guardarPokemon}/> */}
        {/* <Carrusel/> */}
        {/* <Carrusel2/> */}
        <Listar handleClickPokemon={handleClickPokemon} />
        <Detalle urlDetalle={urlDetalle} />
        {/* <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider> */}
    </>

  )
}

export default App
