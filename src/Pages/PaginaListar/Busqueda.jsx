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
                        <label htmlFor="dato" className="buscar">BUSCAR </label>
                        <Field name="dato" id="dato" type="dato" />
                        <div className="error-message">
                            <ErrorMessage name="dato" component="div" />
                        </div>
                    
                   
                    <input
                        type="submit"
                        value={"BUSCAR"}
                        disabled={!isValid}
                    />
                     </div>
                    
                </Form>
            )}
        </Formik>
    </>
  )

}