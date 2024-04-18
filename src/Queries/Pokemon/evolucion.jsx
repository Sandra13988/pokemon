
export async function  evolucion (url) {
  return await fetch(url)
    .then(async res => {
      if (!res.ok) throw new Error('Error en la petición')
      const data3 = await res.json()
      return data3
    })

}
