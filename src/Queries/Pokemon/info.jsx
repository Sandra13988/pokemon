
  export async function  info (urlDetalle) {
    return await fetch(urlDetalle)
      .then(async res => {
        if (!res.ok) throw new Error('Error en la petición')
        const data = await res.json()
        return await data //Esto es lo que se va a la key del useQuery
      })
}

