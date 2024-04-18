import { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from "@tanstack/react-query"

export const Detalle = ({ namePokemon, urlDetalle }) => {

  const queryClient = useQueryClient();

  //Necesita dos paramtros, la Key(Nombre que le quieras dar) y el Value
  //Lo que hay entre {} son los datos que nos va devolver
  const { isLoading, isError, data: data1, error, refetch: refetch1 } = useQuery(
    // -> La Key es una manera de recuperar la informacion desde cualquier sitio ya que el estado es global
    {
      queryKey: ['info basico', namePokemon],
      // -> El segundo parametro es para decirle como debe de recuperar la ID y en este caso es haciendo el fetch del detalle pokemon
      queryFn: async () => await detallePokemon()
    }
  )

  const { data: data2, refetch: refetch2 } = useQuery({ queryKey: ["info completo", namePokemon], queryFn: async () => await detallePokemonCompleto() })
  const { data: data3, refetch: refetch3 } = useQuery({ queryKey: ["info evolucion", namePokemon], queryFn: async () => await detalleEvolucion() })
  // const { data: data4, refetch: refetch4 } = useQuery({ queryKey: ["descripcion", namePokemon], queryFn: async () => await descripcion() })

  //Este es el formato de peticion con manejo y retorno de datos para la cache
  const detallePokemon = async () => {
    return await fetch(urlDetalle)
      .then(async res => {
        if (!res.ok) throw new Error('Error en la petición')
        const data = await res.json()
        return await data //Esto es lo que se va a la key del useQuery
      })

  }


  const detalleEvolucion = async () => {
    return await fetch(data1.evolution_chain.url)
      .then(async res => {
        if (!res.ok) throw new Error('Error en la petición')
        const data3 = await res.json()
        console.log("soy sandra")
        return data3

      })

  }


  const detallePokemonCompleto = async () => {
    return await fetch("https://pokeapi.co/api/v2/pokemon/" + data1.name)
      .then(async res => {
        if (!res.ok) throw new Error('Error en la petición')
        const data2 = await res.json()
        return await data2
      })
  }

  // //Peticion de prueba para pasarle link para resolver dudas, no es util, borrar en el futuro
  // const descripcion = async () => {
  //   return await fetch("https://pokeapi.co/api/v2/language/7/")
  //     .then(async res => {
  //       if (!res.ok) throw new Error('Error en la petición')
  //       const data4 = await res.json()
  //       return await data4
  //     })
  // }

  return (
    <>

      {isLoading && <h3>Cargando...</h3>}

      {data1 && data2 && data3 && !isLoading && (
        <div>
          <h3>Nº #{data1.id}</h3>
          <img src={data2.sprites.front_default} />
          <h3>Nombre: {data1.name.toUpperCase()}</h3>
          <h3>Tipo: {data2.types.map(type => type.type.name).join(", ")}</h3>
          <h3>Altura: {data2.height/10+" m"}</h3>
          <h3>Peso: {data2.weight/10+" Kg"}</h3>

          {/* //Filtro de frases en español y solo de una version, en este caso X porque parece que es donde estan todas las descripciones en español*/}
          {data1.flavor_text_entries
            .filter(frases => frases.language.name === "es" && frases.version.name === "x")
            .map((frase, index) => (
              <h3 key={index}>Descripción: {frase.flavor_text}</h3>
            ))
            }
        </div>
      )}

      {isError && <h3>Ha habido un error...{error.message}</h3>}
    </>
  )
}