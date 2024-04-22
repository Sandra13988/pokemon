import { useState } from 'react'
import './App.css'
import { Buscador } from './Buscador/Buscador'
import { Carrusel } from './Carrusel/Carrusel'
import { Carrusel2 } from './Carrusel/Carrusel2'
import { Listar } from './Listar/Listar'
import { Detalle } from './Detalle/Detalle'
import { Sidebar } from './Sidebar'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
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
     <Routes>
      {/* <QueryClientProvider client={queryClient}> */}
        {/* <Buscador guardarPokemon={guardarPokemon}/> */}
        {/* <Carrusel/> */}
        {/* <Carrusel2/> */}
        <Route path="/" element={<Listar 
          handleClickPokemon={handleClickPokemon} />}
        />
       

        <Route path="/pokemon/:id" element={<Detalle 
          namePokemon={namePokemon} 
          id={id} handleClickPokemon={handleClickPokemon}/>}
        />

        
       

        {/* <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider> */}
      </Routes>
      <Sidebar handleClickPokemon={handleClickPokemon} />
    </>
  )
}

export default App
