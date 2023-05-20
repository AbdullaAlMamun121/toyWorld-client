import React from 'react';
import { Carousel, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import bg from './../../../assets/header.jpg';

const Header = () => {
    return (
        <div style={{ backgroundColor: '#8d8f90' }}>
            <div className="page-header" style={{ background: `url(${bg}) no-repeat`, position: 'relative', backgroundSize: 'cover' }}>
                <Container>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="page-caption" style={{ paddingTop: '170px', paddingBottom: '174px' }}>
                                <h1 className="page-title text-center text-white font-weight-bold">WELCOME TO OUR TOY WORLD</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="card-section" style={{ position: 'relative', bottom: '60px' }}>
                <Container>
                    <div className="card-block bg-white mb-30 p-5">
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <div className="section-title mb-5">
                                    <h2 className="text-center font-weight-bold">A perfect toy for young racers</h2>
                                    <p className="m-0">This car toy is perfect for kids who love racing and adventure. It comes with realistic sound effects and flashing lights.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Header;