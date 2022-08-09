import { useState } from 'react';

const useForm = (defaultValues = {}) => {
    const [working, setWorking] = useState(false);
    const [form, setForm] = useState(defaultValues);
    const [alert, setAlert] = useState({});

    /**
     * @function handleInput
     * @param {event} event
     */
    const handleInput = (event) => {
        if (event.target.name && event.target.value) {
            setForm({
                ...form,
                [event.target.name]: event.target.value,
            });
        } else if (event.target.name && event.target.files) {
            setForm({
                ...form,
                [event.target.name]: event.target.files,
            });
        }
    };

    /**
     * @function handleSubmit
     * @param {Event} event
     * @param {function} handleRequest
     * @param {function} handleSuccess
     * @param {function} handleError
     * @return {Promise<void>}
     */
    const handleSubmit = async (event, handleRequest, handleSuccess = undefined, handleError = undefined) => {
        if (event) {
            event.preventDefault();
        }

        setWorking(true);

        const response = await handleRequest(form);

        if (!response.success) {
            if (handleError) {
                await handleError(response);
            } else {
                setAlert({
                    message: response.message,
                    errors: response.errors,
                    type: 'error',
                });
            }
        } else {
            if (handleSuccess) {
                await handleSuccess(response);
            }
        }

        setWorking(false);
    };

    return {
        working,
        setWorking,
        form,
        setForm,
        alert,
        setAlert,
        handleInput,
        handleSubmit,
    }
};

export default useForm;