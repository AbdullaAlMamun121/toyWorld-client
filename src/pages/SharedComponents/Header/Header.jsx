import React from "react";
import { Carousel, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import bg from "./../../../assets/header.jpg";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div style={{ backgroundColor: "#8d8f90" }}>
      <div
        className="page-header"
        style={{
          background: `url(${bg}) no-repeat`,
          position: "relative",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <motion.div
                className="page-caption"
                style={{ paddingTop: "170px", paddingBottom: "174px" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h1 className="page-title text-center text-white font-weight-bold"
                >
                  WELCOME TO OUR TOY WORLD
                </h1>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      <motion.div
        className="card-section"
        style={{ position: "relative", bottom: "60px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Container>
          <div className="card-block bg-white mb-30 p-5">
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="section-title mb-5">
                  <h2 className="text-center font-weight-bold">
                    A perfect toy for young racers
                  </h2>
                  <p className="m-0">
                    This car toy is perfect for kids who love racing and
                    adventure. It comes with realistic sound effects and
                    flashing lights.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </motion.div>
    </div>
  );
};

export default Header;
