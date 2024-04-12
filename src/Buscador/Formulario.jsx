import { useState } from 'react'
import { Field, ErrorMessage, Formik, Form } from 'formik';
import * as Yup from 'yup';

export const Formulario = ({ recogerDato }) =>{
  
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
                recogerDato(values) 
                resetForm()
            }}>

            {({
                isValid,
            }) => (

                <Form>
                    <div>
                        <label htmlFor="dato">Buscar: </label>
                        <Field name="dato" id="dato" type="dato" />
                        <ErrorMessage name="dato" component="div" />
                    </div>
                    <div>
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