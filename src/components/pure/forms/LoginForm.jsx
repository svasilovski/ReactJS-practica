import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const LoginForm = ({ onSubmit }) => {
    const initialCredentials = {
        email: '',
        password: '',
    };

    return (
    <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}

        onSubmit={(values, actions) => {
            setTimeout(() => {
                onSubmit(values);
                actions.resetForm({});
                actions.setSubmitting(false);
            }, 500);
        }}
    >
        {({ touched, errors, isSubmitting }) => (
            <Form>
                <label htmlFor="email">Email</label>
                <Field id="email" type="email" name="email" placeholder="example@email.com" />
                {errors.email && touched.email && <ErrorMessage name="email" component="div" />}

                <label htmlFor="password">Password</label>
                <Field id="password" name="password" placeholder="password" type="password" />
                {errors.password && touched.password && <ErrorMessage name="password" component="div" />}
                
                <button type="submit">Login</button>
                {isSubmitting ? <p>Login your credentials...</p> : null}
            </Form>
        )}
    </Formik>
    );
};

export default LoginForm;
