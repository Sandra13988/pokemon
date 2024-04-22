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

  const [id, setId] = useState("")
  const [namePokemon, setNamePokemon] = useState("")

  //Entra un pokemon y hay que sacarle el id y nombre
  //Si id no existe, se extrae de la URL
  const handleClickPokemon = (pokemon) => {
    console.log(pokemon.id)
    if(pokemon.id){
      setId(pokemon.id)
    }else{
      console.log(pokemon.url)
      setId(sacarIdDeUrl(pokemon.url))
    }
    
    setNamePokemon(pokemon.name)
    
  }

  const sacarIdDeUrl = (url) =>{
    const partes = url.split("/");
    const ultimoDigito = partes[partes.length - 2];
    return ultimoDigito
  }
 


  return (

    <>
      {/* <QueryClientProvider client={queryClient}> */}
        {/* <Buscador guardarPokemon={guardarPokemon}/> */}
        {/* <Carrusel/> */}
        {/* <Carrusel2/> */}
        <Listar handleClickPokemon={handleClickPokemon} />

        {namePokemon && <Detalle namePokemon={namePokemon} id={id} handleClickPokemon={handleClickPokemon}/>}
        <Sidebar handleClickPokemon={handleClickPokemon} />

        {/* <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider> */}
    </>
  )
}

export default App
