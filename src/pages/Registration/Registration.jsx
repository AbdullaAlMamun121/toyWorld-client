import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Registration = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        // console.log(data);
        const name = data.name;
        const email=data.email;
        const password = data.password;
        console.log(name, email, password);
    };

    return (
        <Container className='w-25 mt-5'>
            <h2>Please Registration</h2>
            <Form onSubmit={handleSubmit(onSubmit)} className='my-2'>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        {...register('name', { required: true })}
                        isInvalid={errors.name}
                    />
                    {errors.name && <Form.Control.Feedback type="invalid">Name is required</Form.Control.Feedback>}
                </Form.Group>

                <Form.Group controlId="formEmail">
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
                <Form.Group controlId="formPassword">
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
                <Form.Group controlId="formPhoto">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control
                        type="text"
                        {...register('photo', { required: true })}
                        isInvalid={errors.photo}
                    />
                    
                </Form.Group>
                <br></br>
                <Form.Text className="text-muted">
                    Already have an account? <Link to="/login">Login</Link>
                </Form.Text>
                <br></br>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                
            </Form>
        </Container>
    );
};

export default Registration;