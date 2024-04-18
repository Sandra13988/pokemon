export async function listar (url) {
    return await fetch(url)
      .then(async res => {
        if (!res.ok) throw new Error('Ocurrió un error al obtener los datos');
        const data = await res.json()
        return await data
      })
  }