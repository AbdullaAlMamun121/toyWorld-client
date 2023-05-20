import React from 'react';
import { Container } from 'react-bootstrap';
import useTitle from '../../../hooks/useTitle';

const Gallery = ({ image }) => {
    useTitle('Gallery');
    const { imageUrl, title, description } = image;
    return (
        <Container>
            <img src={imageUrl} className="img-fluid w-100 mb-2 rounded" />
        </Container>
    );
};

export default Gallery;