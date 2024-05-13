import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
// import { showToast } from '../../../Utiles/Toast';
import { useContext } from 'react'
import { Tipos } from './contextoTipo';
import { usePokemonTipos } from './Queries/Pokemon/tipo';


export const Filtro = ( ) => {

  
    const { tipoSeleccionado, setTipoSeleccionado } = useContext(Tipos)
    console.log(tipoSeleccionado)


    const {isLoading, isError, error, data: tipoPokemon} = usePokemonTipos()

    if ( isLoading) {
        return <h3>Cargando...</h3>
    }

    if (isError || !tipoPokemon) {
        return <h3>Ha habido unerror ....</h3>
    }


    return (
        <>

            <Formik
                initialValues={{
                    tipo: ''
                }}

                validationSchema={Yup.object({


                })}


                onSubmit={(values) => {
                    setTipoSeleccionado(values.tipo)
                    console.log(values)
                   
                }}>

                {({
                    isValid,
                }) => (

                    <Form>

                        {<div>
                            <label htmlFor="tipo">Tipo</label>
                            <Field as="select" name="tipo" id="tipo" type="tipo">
                                <option value="">TODOS</option>
                                {tipoPokemon.results.map(tipo => (
                                    <option key={tipo.name} value={tipo.name}>{tipo.name}</option>
                                ))}
                            </Field>
                            <ErrorMessage name="tipo" component="div" />
                            <input type="submit" value="FILTRAR"/>
                        </div>}
                    </Form>
                )}
            </Formik>
        </>
    )
} 