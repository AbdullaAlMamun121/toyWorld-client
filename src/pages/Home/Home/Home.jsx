import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Gallery from "../Gallery/Gallery";
import DisplayCategory from "../DisplayCategory/DisplayCategory";
import Aos from "aos";
import useTitle from "../../../hooks/useTitle";
import Header from "../../SharedComponents/Header/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import product from "../../../assets/product.jpg";
import KidsCar from "../KidsCar/KidsCar";
import { motion } from "framer-motion";
import ClientTestimonial from "../ClientTestimonial/ClientTestimonial";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      duration: 1.5,
    },
  },
};

const Home = () => {
  useTitle("Home");
  const gallery = useLoaderData();
  useEffect(() => {
    Aos.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <div className="text-center">
      <Header></Header>
      <div style={{ marginTop: "120px" }}>
        <motion.div
          className="w-50 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="mt-5">OUR GALLERY</h2>
          <p className="py-2 lead">
            Explore a world of imagination and joy in our enchanting toy
            gallery. Here, you'll discover an extensive collection of whimsical
            playthings that spark the imagination of both young and
            young-at-heart. 
          </p>
        </motion.div>
        <div
          data-aos="flip-down"
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto mt-5 "
        >
          {gallery.map((image) => (
            <div key={image._id} className="col">
              <div
                className="border rounded shadow-lg"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Gallery
                  image={image}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "120px" }}>
        <motion.div
          className="w-50 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="mt-5">SUB CATEGORY</h2>
          <p className="py-2 lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, commodi
            optio reiciendis iste dolores corrupti eveniet blanditiis harum
            explicabo enim.
          </p>
        </motion.div>
        <motion.div
          className="mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <DisplayCategory></DisplayCategory>
        </motion.div>
      </div>
      <section className="py-5 mb-4 text-light" style={{backgroundColor:"#C2D7FB"}}>
        <Container>
          <Row>
            <Col md={6}>
              <div className="section-content">
                <h2 className="section-title text-black">Discover Our Products</h2>
                <p className="section-description text-black">
                  The remote control car is a popular car toy that allows
                  children to control the movements of a miniature car using a
                  handheld remote. It provides an exciting and interactive play
                  experience, allowing kids to drive the car forward, backward,
                  and even perform stunts.
                </p>
                <Button variant="danger" className="btn-lg">
                  Learn More
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <img
                src={product}
                alt="Service"
                className="img-fluid rounded-2"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <KidsCar></KidsCar>
      {/* client testimonial */}
      <div className="mt-5">
        <ClientTestimonial></ClientTestimonial>
      </div>
    </div>
  );
};

export default Home;
