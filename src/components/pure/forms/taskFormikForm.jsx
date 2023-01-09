import React from 'react';
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import { LEVELS } from "../../../models/levels.enum";

const TaskFormikForm = ({add, length}) => {

    const TaskSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Name is too Short!')
                          .max(50, 'Name is too Long!')
                          .required('Name is required'),
        description: Yup.string().min(2, 'Description is too Short!')
                                 .max(100, 'Description is too Long!')
                                 .required('Description is required'),
    });

    const defaultTask = {
        name: '',
        description: '',
        level: LEVELS.NORMAL,
        done: false,
    };

    return (
        <Formik
            initialValues={defaultTask}
            onSubmit={(values, actions) => {
            setTimeout(() => {
                add(values);
                actions.resetForm({});
                actions.setSubmitting(false);
            }, 500);
            }}
            validationSchema={TaskSchema}
        >
            {({ errors }) => (
                <Form className='form-outline flex-fill'>
                    <Field name="name" placeholder="Task Name" className='form-control' />
                    {errors && errors.name}
                    <Field name="description" placeholder="Task Description" className='form-control' />
                    {errors && errors.description}

                    <Field as="select" name="level" className='form-control'>
                        <option value={LEVELS.NORMAL}>Normal</option>
                        <option value={LEVELS.URGENT}>Urgent</option>
                        <option value={LEVELS.BLOCKING}>Blocking</option>
                    </Field>
                    <button className='btn btn-success' type="submit">Add Task</button>
                </Form>
            )}
        </Formik>
    );
}

export default TaskFormikForm;
