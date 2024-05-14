import { useState, useEffect } from 'react'
import { Field, ErrorMessage, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { usePokemonInfoMasQuery } from '../../Queries/Pokemon/infoMas';
import { useNavigate } from 'react-router-dom'

export const Busqueda = () =>{

    //const [nombre, setNombre] = useState()
   // const { isLoading: isLoadingInfoMas, isError: isInfoMasError, data: infoMasData, error: infoMasError } = usePokemonInfoMasQuery(nombre)

    const navegar = useNavigate()
    

    
   
  return (
    <>
      <Formik
            initialValues={{
                dato: '',
            }}

            validationSchema={Yup.object({
                
                dato: Yup.string()
                    .required("Introduce un nombre o id"),
            })}

            onSubmit={(values, { resetForm }) => {
         
                resetForm()
                navegar(`/pokemon/${values.dato}`);
            }}>

            {({
                isValid,
            }) => (

                <Form>
                    <div className='componentesFormulario'>
                        <label htmlFor="dato">Buscar: </label>
                        <Field name="dato" id="dato" type="dato" />
                        <ErrorMessage name="dato" component="div" />
                    
                   
                    <input
                        type="submit"
                        value={"Buscar"}
                        disabled={!isValid}
                    />
                     </div>
                    
                </Form>
            )}
        </Formik>
    </>
  )

}