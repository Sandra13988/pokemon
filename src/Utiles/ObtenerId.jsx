
export function  obtenerID  (pokemon)  {
    if (pokemon.id) {
      return pokemon.id 
    } else {
      return sacarIdDeUrl(pokemon.url) 
    }
}

const sacarIdDeUrl = (url) => {
    const partes = url.split("/");
    const ultimoDigito = partes[partes.length - 2];
    return ultimoDigito
  }

