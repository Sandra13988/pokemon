import { useQuery } from "@tanstack/react-query"


export function usePokemonListarMismoTipo  (url, tipo)  { 
  return  useQuery({ queryKey: ['pokemon', "tipo", tipo], queryFn: async () => await fetch(url) 
       .then(  res => {
        if (!res.ok) throw new Error('Error en la petición')
        const data =   res.json()
        console.log(data)
        return  data //Esto es lo que se va a la key del useQuery
       }) })
 }