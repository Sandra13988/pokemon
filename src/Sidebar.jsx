import { useEffect, useState } from 'react'
import { usePokemonTipos } from './Queries/Pokemon/tipo'
import { usePokemonListarMismoTipo } from './Queries/Pokemon/pokemonTipo'
import { Routes, Route, Link } from 'react-router-dom'


export const Sidebar = ({ handleClickPokemon }) => {
    const [urlTipo, setUrlTipo] = useState("")
    const [tipo, setTipo] = useState("")

    const {isLoading, isError, error, data: data1} = usePokemonTipos()
    console.log(data1)
 
    const handleClickTipo = (url, tipo) =>{
        setUrlTipo(url)
        setTipo(tipo)
    }
    const {data: data2} = usePokemonListarMismoTipo(urlTipo, tipo) 

    console.log(data2)

    const sacarIdDeUrl = (url) =>{
      const partes = url.split("/");
      const ultimoDigito = partes[partes.length - 2];
      return ultimoDigito
    }
   
 
  return (
    <>
{isLoading && <h3>Cargando...</h3>}
      <ul>
        <h2>TIPOS</h2>
        {data1 && data1.results.map(tipo => {
          return (
            <div key={tipo.name}>
              {/* AQUI QUIZAS DEBA DE PONER RUTA A DETALLE QUE ES DONDE SE COLOCARÁ EL SIDEBAR? */}
              <a onClick={() => handleClickTipo( tipo.url, tipo.name )}>{tipo.name}</a>
            </div>
          )
        })}
      </ul>
      
      {data2 && <div>
        {"Pokemon de tipo "+ tipo}
        
        {data2.pokemon.map(pokemon => {
            return(
            <div key={pokemon.name}>
                 <Link to={`/pokemon/${sacarIdDeUrl(pokemon.pokemon.url)}`}><a onClick={() => handleClickPokemon( pokemon.pokemon )}>{pokemon.pokemon.name}</a></Link>
            </div>
            )     
        })}
        {console.log(data2)}
      </div>}

      
      

      {isError && <h3>Ha habido un error con la lista...{error.message}</h3>}

    </>
  )
}