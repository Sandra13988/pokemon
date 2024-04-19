import { useQuery} from "@tanstack/react-query"



export  function usePokemonEvolucion  (namePokemon , url)  {
  return  useQuery({ queryKey: ["pokemon", "evolucion", namePokemon], queryFn: async () => await fetch(url)
       .then( res => {
         if (!res.ok) throw new Error('Error en la petición')
         const data =  res.json()
         return  data //Esto es lo que se va a la key del useQuery
       }) })
 }