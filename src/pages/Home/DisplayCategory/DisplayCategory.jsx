import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TabList, TabPanel, Tabs, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useTitle from "../../../hooks/useTitle";

const DisplayCategory = () => {
  useTitle("Category");
  const [catOne, setCatOne] = useState([]);
  const [catTwo, setCatTwo] = useState([]);
  const [catThree, setCatThree] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabSelect = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    fetch("https://toy-assignment-server-omega.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        const categoryOne = data.filter(
          (category) => category.data.subCategory === "sports"
        );
        const categoryTwo = data.filter(
          (category) => category.data.subCategory === "police"
        );
        const categoryThree = data.filter(
          (category) => category.data.subCategory === "regular"
        );
        setCatOne(categoryOne);
        setCatTwo(categoryTwo);
        setCatThree(categoryThree);
      })
      .catch((error) => {
        console.log("Error fetching toys:", error);
      });
  }, []);

  return (
    <Container>
      <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
        <div className="d-flex justify-content-center">
          <TabList className="nav nav-tabs">
            <Tab className="nav-item nav-link">Category Sports</Tab>
            <Tab className="nav-item nav-link">Category Police</Tab>
            <Tab className="nav-item nav-link">Category Regular</Tab>
          </TabList>
        </div>
        <TabPanel>
          <Row>
            {catOne.map((category, index) => (
              <Col key={index} sm={6} md={6} lg={4} xl={3}>
                <Card
                  className="mb-4 shadow mt-4 "
                  style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0px 6px 12px rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={category.data.pictureUrl}
                    style={{ width: "100%", height: "200px" }}
                  />

                  <Card.Body>
                    <Card.Title>Name:{category.data.name}</Card.Title>
                    <Card.Text>Price:{category.data.price}</Card.Text>
                    <Card.Text>Rating:{category.data.rating}</Card.Text>
                    <Link
                      className="btn btn-primary"
                      style={{
                        backgroundColor: "#007bff",
                        color: "#ffffff",
                        borderRadius: "5px",
                        width: "100%",
                        padding: "8px 20px",
                        textDecoration: "none",
                        transition: "background-color 0.3s ease",
                      }}
                      to={`/ToyViewDetails/${category._id}`}
                    >
                      View Details
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </TabPanel>

        <TabPanel>
          <Row>
            {catTwo.map((category, index) => (
              <Col key={index} sm={6} md={6} lg={4} xl={3}>
                <Card
                  className="mb-4 shadow mt-4"
                  style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0px 6px 12px rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={category.data.pictureUrl}
                    style={{ width: "100%", height: "200px" }}
                  />

                  <Card.Body>
                    <Card.Title>Name:{category.data.name}</Card.Title>
                    <Card.Text>Price:{category.data.price}</Card.Text>
                    <Card.Text>Rating:{category.data.rating}</Card.Text>
                    <Link
                      className="btn btn-primary"
                      style={{
                        backgroundColor: "#007bff",
                        color: "#ffffff",
                        borderRadius: "5px",
                        width: "100%",
                        padding: "8px 20px",
                        textDecoration: "none",
                        transition: "background-color 0.3s ease",
                      }}
                      to={`/ToyViewDetails/${category._id}`}
                    >
                      View Details
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </TabPanel>

        <TabPanel>
          <Row>
            {catThree.map((category, index) => (
              <Col key={index} sm={6} md={6} lg={4} xl={3}>
                <Card
                  className="mb-4 shadow mt-4"
                  style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0px 6px 12px rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={category.data.pictureUrl}
                    style={{ width: "100%", height: "200px" }}
                  />
                  <Card.Body>
                    <Card.Title>Name:{category.data.name}</Card.Title>
                    <Card.Text>Price:{category.data.price}</Card.Text>
                    <Card.Text>Rating:{category.data.rating}</Card.Text>
                    <Link
                      className="btn btn-primary"
                      style={{
                        backgroundColor: "#007bff",
                        color: "#ffffff",
                        borderRadius: "5px",
                        width: "100%",
                        padding: "8px 20px",
                        textDecoration: "none",
                        transition: "background-color 0.3s ease",
                      }}
                      to={`/ToyViewDetails/${category._id}`}
                    >
                      View Details
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default DisplayCategory;
