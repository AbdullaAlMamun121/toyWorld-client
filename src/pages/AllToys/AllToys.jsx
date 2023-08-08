import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle("All Toys");
  const [searchText, setSearchText] = useState("");
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("https://toy-assignment-server-omega.vercel.app/allToys?limit=20")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(
      `https://toy-assignment-server-omega.vercel.app/toySearchByName/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };
  return (
    <div className="py-5" style={{ backgroundColor: "#E0E7FF", color: "#fff" }}>
      <h3 className="text-center m-4 py-5 text-primary">ALL TOYS HERE</h3>
      <Form className="d-flex w-50 mx-auto mb-3">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Please Search By Name"
          type="text"
          className="p-1 form-control"
        />
        <Button onClick={handleSearch} variant="outline-light">
          Search
        </Button>
      </Form>
      <Container>
        <Table striped bordered hover responsive style={{ backgroundColor: "#FFFFFF" }}>
          <thead style={{ backgroundColor: "#007BFF", color: "#FFFFFF" }}>
            <tr>
              <th>#</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy, index) => (
              <tr key={toy._id}>
                <td>{index + 1}</td>
                <td>{toy.data.sellerName}</td>
                <td>{toy.data.name}</td>
                <td>{toy.data.subCategory}</td>
                <td>{toy.data.price}</td>
                <td>{toy.data.quantity}</td>
                <td>
                  <Link
                    className="btn btn-success btn-lg w-100"
                    to={`/ToyViewDetails/${toy._id}`}
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AllToys;
