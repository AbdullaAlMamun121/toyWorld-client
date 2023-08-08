import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import useTitle from '../../../hooks/useTitle';

const Gallery = ({ image }) => {
    useTitle('Gallery');
    const { imageUrl } = image;
    const [isHovered, setIsHovered] = useState(false);

    const imageStyle = {
        width: '100%',
        height: '75%',
        marginBottom: '2px',
        borderRadius: '5px',
        transition: 'transform 0.3s ease', // Apply transition
        transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Scale on hover
    };

    return (
        <Container>
            <img
                src={imageUrl}
                alt="Gallery Image"
                style={imageStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
        </Container>
    );
};

export default Gallery;
