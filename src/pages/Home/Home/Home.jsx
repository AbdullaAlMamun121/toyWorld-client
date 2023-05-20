import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';
import DisplayCategory from '../DisplayCategory/DisplayCategory';
import Aos from 'aos';
import useTitle from '../../../hooks/useTitle';
import Header from '../../SharedComponents/Header/Header';
import { Button, Col, Container, Row } from 'react-bootstrap';
import product from '../../../assets/product.jpg';
import KidsCar from '../KidsCar/KidsCar';

const Home = () => {
    useTitle('Home');
    const gallery = useLoaderData();
    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: true,
        });
    }, []);
    return (

        <div className='text-center'>
            <Header></Header>
            <h2 className='mt-4'>Our Gallery</h2>
            <div data-aos="flip-down" className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto mt-5">
                {
                    gallery.map(image => <Gallery
                        key={image._id}
                        image={image}
                    >

                    </Gallery>)
                }
            </div>

            <h2 className='mt-5'>Sub category</h2>
            <div>
                <DisplayCategory></DisplayCategory>
            </div>
            <section className="py-5 bg-primary mb-4 text-light">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="section-content">
                                <h2 className="section-title">Discover Our Products</h2>
                                <p className="section-description">
                                    The remote control car is a popular car toy that allows children to control the movements of a miniature car using a handheld remote. It provides an exciting and interactive play experience, allowing kids to drive the car forward, backward, and even perform stunts.
                                </p>
                                <Button variant="danger" className="btn-lg">Learn More</Button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <img src={product} alt="Service" className="img-fluid rounded-2" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <KidsCar></KidsCar>
        </div>
    );
};

export default Home;