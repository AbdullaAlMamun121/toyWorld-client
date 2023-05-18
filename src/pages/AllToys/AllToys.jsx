import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AllToys = () => {

    const [searchText, setSearchText] = useState("");
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allToys?limit=20')
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            })
    }, [])

    const handleSearch = () => {
        fetch(`http://localhost:5000/toySearchByName/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            })
    }
    return (
        <div>
            <h3 className='text-center m-4'>ALL TOYS HERE:{allToys.length}</h3>
            <Form className="d-flex w-25 mx-auto mb-3">
                <input onChange={(e) => setSearchText(e.target.value)} type='text' className='p-1' />
                <Button onClick={handleSearch} variant="outline-success">Search</Button>
            </Form>
            <Container>
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

                    {
                        allToys.map((toy, index) => <tbody
                            key={toy._id}
                        >
                            <tr>
                                <td>{index + 1}</td>
                                <td>{toy.data.sellerName}</td>
                                <td>{toy.data.name}</td>
                                <td>{toy.data.subCategory}</td>
                                <td>{toy.data.price}</td>
                                <td>{toy.data.quantity}</td>
                                <td><Link className='btn btn-success' to={`/ToyViewDetails/${toy._id}`}>View</Link></td>
                            </tr>
                        </tbody>)
                    }

                </Table>
            </Container>
        </div>
    );
};

export default AllToys;