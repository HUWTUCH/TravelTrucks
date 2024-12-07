import {Field, Form, Formik} from "formik";
import {FormikContainer} from "../styled-components/styled-components.tsx";

export const FormBooking = () => {
    return (
        <FormikContainer>
            <div>
                <h1>Book your campervan now</h1>
                <p>Stay connected! We are always ready to help you.</p>
            </div>
            <Formik initialValues={{}} onSubmit={() => {
            }}>
                <Form className='form'>
                    <Field
                        className='form-input input-username-form'
                        type='text'
                        name='username'
                        placeholder='Name*'
                    />
                    <Field
                        className='form-input input-email-form'
                        type='email'
                        name='email'
                        placeholder='Email*'
                    />
                    <Field
                        className='form-input input-date-form'
                        type='text'
                        name='date'
                        placeholder='Booking date*'
                    />
                    <Field
                        className='form-input input-comments-form'
                        as='textarea'
                        name='commets'
                        placeholder='Comment'
                    />
                    <button type='submit'>Send</button>
                </Form>
            </Formik>
        </FormikContainer>
    );
}
