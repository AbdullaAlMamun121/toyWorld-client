import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <Container fluid className="py-5">
                <Row className="justify-content-center">
                    <Col md={8} lg={6} className="text-center">
                        <h4>Subscribe to Our Newsletter</h4>
                        <p>Stay updated with the latest news and offers.</p>
                        <form>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Enter your email" />
                                <button className="btn btn-primary" type="submit">Subscribe</button>
                            </div>
                        </form>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={4} className="text-center">
                        <h5>About Us</h5>
                        <p>Our Company selling most beautiful toys in the hole countries</p>
                    </Col>
                    <Col md={4} className="text-center">
                        <h5>Our Navigation</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </Col>
                    <Col md={4} className="text-center">
                        <h5>Contact Us</h5>
                        <p>Email: hmdabdulla121@gmail.com</p>
                        <p>Phone: +8801761-112716</p>
                    </Col>
                </Row>
            </Container>
            <div className="bg-secondary text-center py-3">
                <p>&copy; {new Date().getFullYear()} Toy Car. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;