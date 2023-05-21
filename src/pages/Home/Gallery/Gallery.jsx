import React from 'react';
import { Container } from 'react-bootstrap';
import useTitle from '../../../hooks/useTitle';

const Gallery = ({ image }) => {
    useTitle('Gallery');
    const { imageUrl } = image;
    return (
        <Container>
            <img src={imageUrl} className="img-fluid w-100 h-75 mb-2 rounded" />
        </Container>
    );
};

export default Gallery;