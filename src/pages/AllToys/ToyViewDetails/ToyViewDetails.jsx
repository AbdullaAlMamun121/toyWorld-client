import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ToyViewDetails = () => {
    const info = useLoaderData();
    console.log(info);
    return (
        <Container className='mb-4 shadow-lg rounded'>
            <h3 className='text-center mt-4'>Toy View Details</h3>
            <Card className='border-0'>
                <Card.Img variant={info.data.pictureUrl} />
                <Card.Body>
                    <Card.Text>
                        <b> Name:</b>{info.data.name}
                    </Card.Text>
                    <Card.Text>
                        <b>Seller Name:</b> {info.data.sellerName}
                    </Card.Text>
                    <Card.Text>
                        <b>Seller Email:</b> {info.data.sellerEmail}
                    </Card.Text>
                    <Card.Text>
                        <b>Price:</b> {info.data.price}
                    </Card.Text>
                    <Card.Text>
                        <b>Rating:</b> {info.data.rating}
                    </Card.Text>
                    <Card.Text>
                        <b>Quantity:</b> {info.data.quantity}
                    </Card.Text>
                    <Card.Text>
                        <b>Details:</b> {info.data.details}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ToyViewDetails;