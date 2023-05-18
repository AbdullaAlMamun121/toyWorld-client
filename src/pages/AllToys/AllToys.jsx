import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Table } from 'react-bootstrap';

const AllToys = () => {

    const [allToys, setAllToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allToys?limit=20')
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            })
    }, [])
    console.log(allToys)
    return (
        <div>
            <h3 className='text-center m-4'>ALL TOYS HERE:{allToys.length}</h3>
            <Form className="d-flex w-25 mx-auto mb-3">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            {
                allToys.map((toy,index) => (
                    <Container
                    key={toy._id}
                    >
                        <Table striped="columns">
                            <thead>
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
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{toy.data.sellerName}</td>
                                    <td>{toy.data.name}</td>
                                    <td>{toy.data.subCategory}</td>
                                    <td>{toy.data.price}</td>
                                    <td>{toy.data.quantity}</td>
                                    <td><Button>View</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                ))
            }
        </div>
    );
};

export default AllToys;