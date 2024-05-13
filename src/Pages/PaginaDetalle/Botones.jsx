


export const Botones = ({ infoData, infoMasData }) => {
    
    const handleClickSiguiente = () => {
        const siguienteId = parseInt(id) + 1;
        history.push(`/detalle/${siguienteId}`);
      };
    
      const handleClickAnterior = () => {
        const anteriorId = parseInt(id) - 1;
        history.push(`/detalle/${anteriorId}`);
      };

  return (
    <>
        
       
    </>
  )
}