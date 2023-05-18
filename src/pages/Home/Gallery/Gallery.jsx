import React from 'react';
import {  Container } from 'react-bootstrap';

const Gallery = ({ image }) => {
    const { imageUrl, title, description } = image;
    return (
        <Container>
            <div>
                <img src={imageUrl} className="img-fluid w-25" />
            </div>
        </Container>
    );
};

export default Gallery;