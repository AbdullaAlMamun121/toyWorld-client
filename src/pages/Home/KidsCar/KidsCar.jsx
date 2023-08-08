import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
const KidsCar = () => {
  return (
    <Container>
      <motion.div
      className="mt-5"
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
           hidden: { opacity: 0, x: -50 },
           visible: { opacity: 1, x: 0 },
         }}
      >
        <h2 className="text-center">KIDS CAR TOY SECTION</h2>

        <Row className="mt-5">
          <Col>
            <Row className="justify-content-center">
              <Col md={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title className="text-center">
                      Remote Control Cars
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title className="text-center">
                      Race Track Sets
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title className="text-center">
                      Diecast Model Cars
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title className="text-center">
                      Car Building Kits
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title className="text-center">
                      Toy Car Garage
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title className="text-center">
                      Car Carrier Truck
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default KidsCar;
