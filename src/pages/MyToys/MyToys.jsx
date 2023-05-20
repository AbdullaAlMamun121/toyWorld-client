import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import UpdateMyToys from './UpdateMyToys/UpdateMyToys';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [modalShow, setModalShow] = useState({});
    const [control, setControl] = useState(false);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortBy, setSortBy] = useState('price');
    useTitle('My Toys');

    const handleSortOrder = (field) => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
        setSortBy(field);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}?sortOrder=${sortOrder}&sortBy=${sortBy}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyToys(data);
            });
    }, [user, control, sortOrder, sortBy]);

    const handleToyUpdate = (data) => {
        fetch(`http://localhost:5000/updateMyToy/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Data Updated successfully');
                    setControl(!control);
                }
            });
    };

    const handleDeleteToy = (id) => {
        const confirmationMessage = confirm('Are you sure you want to delete?');
        if (confirmationMessage) {
            fetch(`http://localhost:5000/myToys/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = myToys.filter(myToy => myToy._id !== id);
                        setMyToys(remaining);
                    }
                });
        }
    };

    const handleEditButtonClick = (toyId) => {
        setModalShow(prevState => ({
            ...prevState,
            [toyId]: true,
        }));
    };

    return (
        <div>
            <h3 className='text-center m-4'>MY TOYS HERE</h3>
            <Container>
                <Button onClick={() => handleSortOrder('price')} className='mb-2'>
                    Sort by Price ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                </Button>
                <Table striped>
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
                    <tbody>
                        {myToys.map((toy, index) => (
                            <tr key={toy._id}>
                                <td>{index + 1}</td>
                                <td>{toy.data.sellerName}</td>
                                <td>{toy.data.name}</td>
                                <td>{toy.data.subCategory}</td>
                                <td>{toy.data.price}</td>
                                <td>{toy.data.quantity}</td>
                                <td>
                                    <Link className='btn btn-success' to={`/ToyViewDetails/${toy._id}`}>View</Link>
                                </td>
                                <td>
                                    <Button
                                        variant="primary"
                                        onClick={() => handleEditButtonClick(toy._id)}
                                    >
                                        Edit
                                    </Button>
                                    <UpdateMyToys
                                        show={modalShow[toy._id] || false}
                                        onHide={() => setModalShow(prevState => ({
                                            ...prevState,
                                            [toy._id]: false,
                                        }))}
                                        toy={toy}
                                        handleToyUpdate={handleToyUpdate}
                                    />
                                </td>
                                <td>
                                    <Button
                                        onClick={() => handleDeleteToy(toy._id)}
                                        className='btn btn-success'
                                        to="/"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default MyToys;
