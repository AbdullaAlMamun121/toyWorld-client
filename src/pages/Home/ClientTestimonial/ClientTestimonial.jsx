import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import client1Image from "../../../assets/clients/client-1.jpg";
import client2Image from "../../../assets/clients/client-2.jpg";
import client3Image from "../../../assets/clients/client-3.jpg";

const ClientTestimonial = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(-1);
  };

  const testimonialCards = [
    {
      name: "Agnelina",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      image: client1Image,
    },
    {
      name: "Riyan",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      image: client2Image,
    },
    {
      name: "Safiya",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      image: client3Image,
    },
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-4">
        <h2>WHAT OUR CLIENTS SAY</h2>
        <p className="lead">
          Discover what our clients have to say about their experience with Toy World.
        </p>
      </div>
      <Row>
        {testimonialCards.map((card, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card
              className={`h-100 shadow ${
                hoveredIndex === index ? "testimonial-card-hovered" : ""
              }`}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
            >
              <Card.Img
                variant="top"
                src={card.image}
                alt={card.name}
                style={{
                  objectFit: "cover",
                  height: "300px",
                  transition: "opacity 0.3s",
                  opacity: hoveredIndex === index ? 0.5 : 1,
                }}
              />
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ClientTestimonial;
