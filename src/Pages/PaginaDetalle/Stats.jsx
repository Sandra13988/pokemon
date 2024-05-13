


export const Stats = ({ infoData, infoMasData }) => {

    return (
        <>

            <h2>Estadisticas</h2>


            <div className="stats">
                <div className="statsTitulos">
                    <strong>HP</strong>
                    <strong>ATAQUE</strong>
                    <strong>DEFENSA</strong>
                    <strong>ATAQUE ESPECIAL</strong>
                    <strong>DEFENSA ESPECIAL</strong>
                    <strong>VELOCIDAD</strong>
                </div>
                <div className='statsNumeros'>

                    {infoMasData.map(stat => {
                        { console.log(stat.base_stat) }
                        return <div>{stat.base_stat}</div>
                    })}

                </div>
            </div>


        </>
    )
}

