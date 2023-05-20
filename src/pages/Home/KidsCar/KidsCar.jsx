import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const KidsCar = () => {
    return (
        <Container>
            <h2 className="text-center">Kids Car Toy Section</h2>

            <Row className="mt-5">
                <Col>
                    <Row className="justify-content-center">
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="text-center">Remote Control Cars</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="text-center">Race Track Sets</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="text-center">Diecast Model Cars</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="text-center">Car Building Kits</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="text-center">Toy Car Garage</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="text-center">Car Carrier Truck</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default KidsCar;