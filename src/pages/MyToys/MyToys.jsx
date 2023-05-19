import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyToys(data);
            })
    }, [user]);

    return (
        <div>
            <h3 className='text-center m-4'>MY TOYS HERE: {myToys.length}</h3>
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
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    {
                        myToys.map((toy, index) => <tbody
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
                                <td><Link className='btn btn-success' to="/">Update</Link></td>
                                <td><Link className='btn btn-success' to="/">Delete</Link></td>
                            </tr>
                        </tbody>)
                    }

                </Table>
            </Container>
        </div>
    );
};

export default MyToys;