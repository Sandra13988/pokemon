import { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { info } from '../Queries/Pokemon/info';
import { infoMas } from '../Queries/Pokemon/infoMas';
import { evolucion } from '../Queries/Pokemon/evolucion';
import { listar } from '../Queries/lista';

export const Detalle = ({ namePokemon, urlDetalle }) => {

  const queryClient = useQueryClient();

  //Necesita dos paramtros, la Key(Nombre que le quieras dar) y el Value
  //Lo que hay entre {} son los datos que nos va devolver
  const { isLoading, isError, data: data1, error, refetch: refetch1 } = useQuery(
    // -> La Key es una manera de recuperar la informacion desde cualquier sitio ya que el estado es global
    {
      queryKey: ["pokemon", "info", namePokemon],
      // -> El segundo parametro es para decirle como debe de recuperar la ID y en este caso es haciendo el fetch del detalle pokemon
      queryFn: async () => await info(urlDetalle)
    }
  )

  const { data: data2, refetch: refetch2 } = useQuery({ queryKey: ["pokemon", "infoMas", namePokemon], queryFn: async () => await infoMas(data1.name) })
  const { data: data3, refetch: refetch3 } = useQuery({ queryKey: ["pokemon", "evolucion", namePokemon], queryFn: async () => await evolucion(data1.evolution_chain.url) })


  

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