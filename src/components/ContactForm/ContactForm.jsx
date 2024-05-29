import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from 'yup'
import {addContact} from "@/store/contactSlice.js";
import {useDispatch} from "react-redux";

const ContactForm = () => {
    const dispatch = useDispatch();
    const initialValues = {
        username: '',
        phonenumber: ''
    }

    const schema = yup.object()
                      .shape({
                          username: yup.string()
                                       .min(3, 'The field cannot be less than 3 characters')
                                       .max(50, 'The field cannot be more than 50 characters')
                                       .matches(/^[a-zA-Z\s]+$/, 'The name must contain only letters')
                                       .required('Field cannot be empty'),
                          phonenumber: yup.string()
                                          .matches(/^[-0-9]+$/, 'Only numbers and dashes are allowed')
                                          .matches(/^\d{3}-\d{2}-\d{2}$/, 'The format should be 000-00-00')
                                          .required('Field cannot be empty'),
                      })

    return (
        <Formik
            initialValues={
                initialValues
            }
            validationSchema={schema}
            onSubmit={(values, {resetForm}) => {
                const fullName = values.username.split(' ')
                                       .map(el => el[0].toUpperCase() + el.slice(1)
                                                                          .toLowerCase() + ' ')
                                       .join('')
                const newContact = {
                    id: Date.now(),
                    name: fullName,
                    number: values.phonenumber
                }
                dispatch(addContact(newContact));
                resetForm()
            }}
        >
            {() => (
                <Form autoComplete='off'
                      className='flex flex-col basis-1/2 text-white'
                >
                    <label htmlFor='username'
                           className='text-2xl mb-2 font-semibold'
                    >Username</label>
                    <Field type='text'
                           className='text-2xl pl-2 pb-2 bg-transparent border-b border-solid focus:outline-none focus:border-b-amber-500'
                           id='username'
                           name='username'
                    />
                    <ErrorMessage name='username'
                                  className='text-red-500 mt-2 text-xl'
                                  component='div'
                    />

                    <label htmlFor='phonenumber'
                           className='mt-5 mb-2 text-2xl font-semibold'
                    >Number</label>
                    <Field type='phonenumber'
                           className='text-2xl pl-2 pb-2 bg-transparent border-b border-solid focus:outline-none focus:border-b-amber-500'
                           id='phonenumber'
                           name='phonenumber'
                    />
                    <ErrorMessage name='phonenumber'
                                  className='text-red-500 mt-2 text-xl'
                                  component='div'
                    />
                    <button type='submit'
                            className='px-5 py-2 rounded-2xl text-2xl mt-20 font-semibold w-1/2 self-center bg-orange-500 hover:bg-orange-600'
                    >Add Contact
                    </button>
                </Form>
            )}

        </Formik>
    );
};
export default ContactForm
