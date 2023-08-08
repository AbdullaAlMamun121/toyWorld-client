import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const ToyViewDetails = () => {
    useTitle('Toy Details');
    const info = useLoaderData();

    return (
        <Container className='mb-4 shadow-lg rounded' style={{marginTop:'100px'}}>
            <h3 className='text-center py-5'>Toy View Details</h3>
            {/* <hr className="w-25 mx-auto"/> */}
            <Card className='border-0'>
                <Card.Img style={{width:"100%", height:"80vh"}} src={info.data.pictureUrl} />
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
                        <b>Details:</b> {info.data.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ToyViewDetails;