import { useLocation, useNavigate } from 'react-router-dom';

import Unauthenticated from 'Components/Layouts/Unauthenticated';

import { Card, CardHeader, CardBody, CardFooter } from 'Components/Card';
import { Input } from 'Components/Form';
import { PrimaryButton } from 'Components/Buttons';
import { Container, Alert } from 'Components/Partials';

import { useAuth, useForm, useRequest } from 'Hooks';

const Login = () => {
    const { setToken } = useAuth();

    const { handleInput, handleSubmit, form, working, alert, setAlert } = useForm();
    const { post } = useRequest();

    // Record where the user came from so that we can redirect them back after they've authed
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    /**
     * @function handleRequest
     * @param {object} form
     * @return {Promise<{data, success: boolean, status}|*>}
     */
    const handleRequest = (form) => post('/../oauth/token', {
        ...form,
        username: form.email,
        grant_type: 'password',
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
    });

    /**
     * @function handleSuccess
     * @param {object} response
     */
    const handleSuccess = async (response) => {
        await setToken(response.access_token, response.expires_in, response.refresh_token);

        navigate(from);
    };

    /**
     * @function handleError
     */
    const handleError = () => setAlert({
        type: 'error',
        message: 'Your credentials are invalid',
    });

    return (
        <Unauthenticated>
            <Container sizeClassName="max-w-xl">
                <Card>
                    <form onSubmit={(e) => handleSubmit(e, handleRequest, handleSuccess, handleError)}>
                        <CardHeader>Login</CardHeader>

                        <CardBody className="space-y-4">
                            {alert && (<Alert {...alert} />)}

                            <Input 
                                label="Email"
                                name="email"
                                value={form.email}
                                onChange={handleInput}
                            />

                            <Input 
                                label="Password"
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleInput}
                            />
                        </CardBody>

                        <CardFooter className="flex justify-end">
                            <PrimaryButton working={working}>
                                Login    
                            </PrimaryButton>
                        </CardFooter>
                    </form>
                </Card>
            </Container>
        </Unauthenticated>
    );
};

export default Login;