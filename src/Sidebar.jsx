import { useEffect, useState } from 'react'
import { usePokemonTipos } from './Queries/Pokemon/tipo'
import { usePokemonListarMismoTipo } from './Queries/Pokemon/pokemonTipo'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'


export const Sidebar = () => {
    const [urlTipo, setUrlTipo] = useState("")
    const [tipo, setTipo] = useState("")
    const navegar = useNavigate()

    const {isLoading, isError, error, data: tipoPokemon} = usePokemonTipos()
    console.log(tipoPokemon)
 
    const handleClickTipo = (url, tipo) =>{
        setUrlTipo(url)
        setTipo(tipo)
    }
    const {data: mismoTipo} = usePokemonListarMismoTipo(urlTipo, tipo) 

    console.log(mismoTipo)

    const sacarIdDeUrl = (url) =>{
      const partes = url.split("/");
      const ultimoDigito = partes[partes.length - 2];
      return ultimoDigito
    }
   
    if(isLoading ){
      return <h3>Cargando...</h3>
    }
  
    if (isError || !tipoPokemon ){
      return <h3>Ha habido un error...{isError.message || isError.message}</h3>
    }
  

  return (
    <>

      <ul>
        <h2>TIPOS</h2>
        {console.log(tipoPokemon)}
        {tipoPokemon.results.map(tipo => {
          return (
            <div key={tipo.name}>
              {/* AQUI QUIZAS DEBA DE PONER RUTA A DETALLE QUE ES DONDE SE COLOCARÁ EL SIDEBAR? */}
              <a onClick={() => handleClickTipo( tipo.url, tipo.name )}>{tipo.name}</a>
            </div>
          )
        })}
      </ul>
      
      {mismoTipo && <div>
        {"Pokemon de tipo "+ tipo}
        <ul>
        {mismoTipo.pokemon.map(pokemon => {
            return(
                <Link to={ `/pokemon/${sacarIdDeUrl(pokemon.pokemon.url)}` }><li key={ pokemon.name }>{pokemon.pokemon.name}</li></Link>
            )     
        })}
        </ul>
 
      </div>}

    

    </>
  )
}