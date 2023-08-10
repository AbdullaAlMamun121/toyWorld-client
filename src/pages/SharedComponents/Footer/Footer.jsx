import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../../../src/assets/logo.jpg';
const Footer = () => {
    return (
        <footer className="text-white" style={{backgroundColor:"#246BE8"}}>
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
                        <div className="logo-section">
                            <img style={{width:"50px", height:"40px", borderRadius:"100%"}} src={logo} alt="Logo" />
                        </div>
                        <h5>Toy World</h5>
                        <p>Our Company selling most beautiful toys in the hole countries</p>
                    </Col>
                    <Col md={4} className="text-center">
                        <h5>Our Navigation</h5>
                        <ul className="list-unstyled">
                            <li><Link className="text-white" to="/">Home</Link></li>
                            <li><Link className="text-white" to="/about">About Us</Link></li>
                            <li><Link className="text-white" to="/services">Services</Link></li>
                            <li><Link className="text-white" to="/contact">Contact</Link></li>
                        </ul>
                        <h5>Our Social Link</h5>
                        <div className="social-icons">
                            <a className='m-2' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a className='m-2' href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                            <a className='m-2' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>

                    </Col>
                    <Col md={4} className="text-center">
                        <h5>Contact Us</h5>
                        <p>Email: hmdabdulla121@gmail.com</p>
                        <p>Phone: +8801761-112716</p>
                    </Col>
                </Row>
            </Container>
            <div className="text-center py-3 text-black" style={{backgroundColor:"#F0F3F5"}}>
                <p>&copy; {new Date().getFullYear()} Toy Car. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;