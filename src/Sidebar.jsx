import { useEffect, useState } from 'react'
import { usePokemonTipos } from './Queries/Pokemon/tipo'



export const Sidebar = ({ handleClickTipo }) => {

    const {isLoading, isError, error, data} = usePokemonTipos()
    console.log(data)
 

  return (
    <>
{isLoading && <h3>Cargando...</h3>}
      <ul>
        <h2>TIPOS</h2>
        {data && data.results.map(tipo => {
          return (
            <div key={tipo.name}>
              <a onClick={() => handleClickTipo( tipo.url )}>{tipo.name}</a>
            </div>
          )
        })}

      </ul>
      

      {isError && <h3>Ha habido un error con la lista...{error.message}</h3>}

    </>
  )
}