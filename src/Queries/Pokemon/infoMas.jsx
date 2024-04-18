
export async function  infoMas(pokemonName) {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(async (res) => {
        if (!res.ok) throw new Error('Error en la petición');
        const data = await res.json();
        return data;
      });
  };
  
  