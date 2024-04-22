import { useState } from 'react'
import './App.css'
import { Buscador } from './Buscador/Buscador'
import { Carrusel } from './Carrusel/Carrusel'
import { Carrusel2 } from './Carrusel/Carrusel2'
import { Listar } from './Listar/Listar'
import { Detalle } from './Detalle/Detalle'
import { Sidebar } from './Sidebar'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


// const queryClient = new QueryClient()
function App() {

  const [urlDetalle, setUrlDetalle] = useState("")
  const [namePokemon, setNamePokemon] = useState("")

  const handleClickPokemon = ({pokemon}) => {
    setNamePokemon(pokemon.name)
    setUrlDetalle(pokemon.url)
  }

  return (

    <>
      {/* <QueryClientProvider client={queryClient}> */}
        {/* <Buscador guardarPokemon={guardarPokemon}/> */}
        {/* <Carrusel/> */}
        {/* <Carrusel2/> */}
        <Listar handleClickPokemon={handleClickPokemon} />
        {namePokemon && <Detalle namePokemon={namePokemon} urlDetalle={urlDetalle} />}
        <Sidebar />
        {/* <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider> */}
    </>

  )
}

export default App
