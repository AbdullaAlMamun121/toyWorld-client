import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login');
    const navigate = useNavigate();
    const location = useLocation();

    const { signIn,createUserWithGoogle } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const from = location.state?.from?.pathname || '/';
    
    const onSubmit = data => {
        // console.log(data);
        const email = data.email;
        const password = data.password;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedIn = result.user;
                console.log(loggedIn);
                navigate(from,{replace:true});
            })
            .catch(err => {
                setErrorMessage(err.message);
                console.log(err.message);
            });
    };

    const handleLoginByGoogle=()=>{
        createUserWithGoogle()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from,{replace:true});
        })
        .catch((err) => {
            console.log(err);
            setErrorMessage(err.message)
        })
    }

    return (
        <Container className='w-25'>
            <h2>Please Login</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Group controlId="formEmail" className='mb-4'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        isInvalid={errors.email}
                    />
                    {errors.email && (
                        <Form.Control.Feedback type="invalid">Please enter a valid email address</Form.Control.Feedback>
                    )}
                </Form.Group>

                <Form.Group controlId="formPassword" className='mb-4'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        {...register('password', { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i })}
                        isInvalid={errors.password}
                    />
                    {errors.password && (
                        <Form.Control.Feedback type="invalid">Please enter a valid password</Form.Control.Feedback>
                    )}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Button
                         onClick={handleLoginByGoogle}
                        className="mb-2 rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                            width: '40px',
                            height: '40px',
                            padding: '0',
                            borderWidth: '2px',
                        }}
                        variant="outline-primary"
                    >
                        <FaGoogle />
                    </Button>
                    <Form.Text className="text-muted">
                        New to Toy Car? <Link to="/registration">Register</Link>
                    </Form.Text>
                </Form.Group>
                <Button className='mb-2' variant="primary" type="submit">
                    Submit
                </Button>
                <br />
                <p>{errorMessage}</p>
            </Form>
        </Container>
    );
};

export default Login;