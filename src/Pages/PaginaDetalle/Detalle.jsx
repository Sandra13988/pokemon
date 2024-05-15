
import { usePokemonInfoQuery } from '../../Queries/Pokemon/info'; // Query que saca la info basica de un pokemon 
import { usePokemonInfoMasQuery } from '../../Queries/Pokemon/infoMas'; // Query que saca info completa de un pokemon
import { Evoluciones } from './Evoluciones' //componente que imprime el banner de las evoluciones
import { useParams, useNavigate } from 'react-router-dom'
import { MostrarDetalles } from './MostrarDetalles'
import { Imagenes } from './Imagenes';
import { Stats } from './Stats';
import { ScrollToTopButton } from '../../Utiles/BotonSubir';
import { PokemonTypeTable } from './DebilYFort';


export const Detalle = ({ }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading: isLoadingInfo, isError: isInfoError, data: infoData, error: infoError } = usePokemonInfoQuery(id && id)
  const { isLoading: isLoadingInfoMas, isError: isInfoMasError, data: infoMasData, error: infoMasError } = usePokemonInfoMasQuery(id && id)

  const handleClickSiguiente = () => {
    const siguienteId = parseInt(id) + 1;
    navigate(`/pokemon/${siguienteId}`);
  };

  const handleClickAnterior = () => {
    const anteriorId = parseInt(id) - 1;
    navigate(`/pokemon/${anteriorId}`);
  };

  const volver = () =>{
    navigate(`/`);
  }
  console.log(id)
  console.log(infoData)
  console.log(infoMasData)




  if (isLoadingInfo || isLoadingInfoMas) {
    return <h3>Cargando...</h3>
  }

  if (isInfoError || isInfoMasError || !infoData || !infoMasData) {
    navigate(`*`);
    
  }
  const pokemonTypes = infoMasData.types.map(type => type.type.name);
  return (
    <>
   
      <img src="../../../src/assets/imgbin_pokemon-logo-png.png" alt="" width="300" height="180" />
      <div>
        <button onClick={handleClickAnterior}>Anterior</button>
        <button onClick={handleClickSiguiente}>Siguiente</button>
      </div>

      
  
      <MostrarDetalles infoData={infoData} infoMasData={infoMasData} />
      <Evoluciones url={infoData.evolution_chain.url} nombre={infoData.name} />
      <Imagenes infoMasData={infoMasData.sprites} />
      <Stats infoMasData={infoMasData.stats} />
      <PokemonTypeTable types={pokemonTypes}/>
      <br></br>
      <button onClick={volver}>Volver a la lista</button>
      <ScrollToTopButton/>
    </>
  )
}