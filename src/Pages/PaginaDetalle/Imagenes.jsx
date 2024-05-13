
export const Imagenes = ({ infoMasData }) => {





    return (
        <>
            {console.log(infoMasData)}
            <h2>Aspecto</h2>
            <div className='stats'>

                <div className="titulos">
                    <strong>NORMAL</strong>
                    <strong>VARIOCOLOR</strong>
                </div>

                <div className="posicion">
                    <div>FRENTE</div>
                    <div>ESPALDA</div>
                    <div>FRENTE</div>
                    <div>ESPALDA</div>
                </div>

                <div className="imagenesPosicion">
                    <img src={infoMasData.front_default} />
                    <img src={infoMasData.back_default} />

                    <img src={infoMasData.front_shiny} />
                    <img src={infoMasData.back_shiny} />
                </div>

            </div>

        </>
    )
}

