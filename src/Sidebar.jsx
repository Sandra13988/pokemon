import { useEffect, useState } from 'react'
import { usePokemonTipos } from './Queries/Pokemon/tipo'
import { usePokemonListarMismoTipo } from './Queries/Pokemon/pokemonTipo'


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


    // const {data: data3} = 
  return (
    <>
{isLoading && <h3>Cargando...</h3>}
      <ul>
        <h2>TIPOS</h2>
        {data1 && data1.results.map(tipo => {
          return (
            <div key={tipo.name}>
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
                <a onClick={() => handleClickPokemon( pokemon.pokemon )}>{pokemon.pokemon.name}</a>
            </div>
            )     
        })}
        {console.log(data2)}
      </div>}

      
      

      {isError && <h3>Ha habido un error con la lista...{error.message}</h3>}

    </>
  )
}