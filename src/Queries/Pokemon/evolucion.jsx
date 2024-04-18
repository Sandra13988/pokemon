import { useQuery} from "@tanstack/react-query"



export async function usePokemonEvolucion  (namePokemon , url)  {
  return  useQuery({ queryKey: ["pokemon", "evolucion", namePokemon], queryFn: async () => await fetch(url)
       .then(async res => {
         if (!res.ok) throw new Error('Error en la petición')
         const data = await res.json()
         return await data //Esto es lo que se va a la key del useQuery
       }) })
 }