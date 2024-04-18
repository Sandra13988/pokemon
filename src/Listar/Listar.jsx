import { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { listar } from '../Queries/lista';

export const Listar = ({ handleClickPokemon }) => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon-species/")
  const [pagina, setPagina] = useState(1)

  useEffect(() => {
    listar(url)
  }, [url])

  const handleClickSiguiente = () => {
    setUrl(data.next)
    setPagina(pagina + 1)
  }

  const handleClickAtras = () => {
    setUrl(data.previous)
    setPagina(pagina - 1)
  }


  

  const { data, isLoading, isError, error } = useQuery({ queryKey: ['pokemon', "lista", "pagina",  pagina], queryFn: async () => await listar(url) })

  console.log(data)
  return (
    <>
      {isLoading && <h3>Cargando...</h3>}
      <ul>
        {data && data.results.map(pokemon => {
          return (
            <div key={pokemon.name}>
              <a onClick={() => handleClickPokemon({ pokemon })}>{pokemon.name}</a>
            </div>
          )
        })}

      </ul>
      <button onClick={() => handleClickAtras()}>{"<<<"}</button>
      <button onClick={() => handleClickSiguiente()}>{">>>"}</button>

      {isError && <h3>Ha habido un error con la lista...{error.message}</h3>}

    </>
  )

}
