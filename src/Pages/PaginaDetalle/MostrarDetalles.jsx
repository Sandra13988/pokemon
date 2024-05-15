



export const MostrarDetalles = ({ infoData, infoMasData}) => {

  const colocarImagen = (tipo) => {
    switch (tipo) {
      case "bug": return '../../../src/assets/icons/bug.ico';
      case "dark": return "../../../src/assets/icons/dark.ico";
      case "dragon": return "../../../src/assets/icons/dragon.ico";
      case "electric": return "../../../src/assets/icons/electric.ico";
      case "fairy": return "../../../src/assets/icons/fairy.ico";
      case "fighting": return "../../../src/assets/icons/fighting.ico";
      case "fire": return "../../../src/assets/icons/fire.ico";
      case "flying": return "../../../src/assets/icons/flying.ico";
      case "ghost": return "../../../src/assets/icons/ghost.ico";
      case "grass": return "../../../src/assets/icons/grass.ico";
      case "ground": return "../../../src/assets/icons/ground.ico";
      case "ice": return "../../../src/assets/icons/ice.ico";
      case "normal": return "../../../src/assets/icons/normal.ico";
      case "poison": return "../../../src/assets/icons/poison.ico";
      case "psychic": return "../../../src/assets/icons/psychic.ico";
      case "rock": return "../../../src/assets/icons/rock.ico";
      case "steel": return "../../../src/assets/icons/steel.ico";
      case "water": return "../../../src/assets/icons/water.ico";
      default: return "";
    }
  };
  return (
    <>

      <h3># {infoMasData.id}</h3>
      <img src={infoMasData.sprites.front_default} width="200" height="200" />
      <h2>Detalles</h2>
      <div className="tablaInfo" >

        <h2 className="nombrePokemon"> {infoData.name.toUpperCase()}</h2>
        <div className="infoPokemon">
          <div>{infoMasData.types.map(type => (
            <img key={type.type.name} src={colocarImagen(type.type.name)} alt={type.type.name} width="40" height="40" />
          ))}</div>
          <div><strong>Altura: </strong>{infoMasData.height / 10 + " m"}</div>
          <div><strong>Peso: </strong>{infoMasData.weight / 10 + " Kg"}</div>
          <div><strong>Generacion: </strong>{infoData.generation.name}</div>
        </div>
        {/* //Filtro de frases en español y solo de una version, en este caso X porque parece que es donde estan todas las descripciones en español*/}
        <div className="descripcionPokemon">
          {infoData.flavor_text_entries
            .filter(frases => frases.language.name === "es" && frases.version.name === "x")
            .map((frase, index) => (
              <h3 key={index}>Descripción: {frase.flavor_text}</h3>
            ))
          }
        </div>
      </div>
    </>
  )
}

