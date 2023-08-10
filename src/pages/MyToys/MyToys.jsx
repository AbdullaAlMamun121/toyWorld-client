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
    const [sortBy, setSortBy] = useState("price");
    useTitle('My Toys');

    const handleSortOrder = (field) => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
        setSortBy(field);
    };


    useEffect(() => {
        fetch(`https://toy-assignment-server-omega.vercel.app/myToys/${user?.email}?sortOrder=${sortOrder}&sortBy=${sortBy}`)
            .then(res => res.json())
            .then(data => {
                // Convert price from string to number
                data.forEach(toy => {
                    toy.data.price = parseInt(toy.data.price);
                });

                setMyToys(data);
            });
    }, [user, sortOrder, sortBy, control]);




    const handleToyUpdate = (data) => {
        fetch(`https://toy-assignment-server-omega.vercel.app/updateMyToy/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Data updated successfully');
                    setControl(!control);
                }
            });
    };

    const handleDeleteToy = (id) => {
        const confirmationMessage = window.confirm('Are you sure you want to delete?');
        if (confirmationMessage) {
            fetch(`https://toy-assignment-server-omega.vercel.app/myToys/${id}`, {
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
        <div className="py-5" style={{ backgroundColor: "#EFF6FF" }}>
        <Container>
          <h3 className="text-center m-4 text-primary py-5">MY TOYS HERE</h3>
          <Button
            onClick={() => handleSortOrder("price")}
            className="mb-3"
            variant="secondary"
          >
            Sort by Price ({sortOrder === "asc" ? "Ascending" : "Descending"})
          </Button>
          <Table striped bordered hover responsive style={{ backgroundColor: "#FFFFFF" }}>
            <thead style={{ backgroundColor: "#007BFF", color: "#FFFFFF" }}>
              <tr>
                <th>#</th>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Actions</th>
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
                    <div className="d-flex justify-content-around">
                      <Link
                        className="btn btn-success btn-sm"
                        to={`/ToyViewDetails/${toy._id}`}
                      >
                        View
                      </Link>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleEditButtonClick(toy._id)}
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDeleteToy(toy._id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </Button>
                    </div>
                    <UpdateMyToys
                      show={modalShow[toy._id] || false}
                      onHide={() =>
                        setModalShow((prevState) => ({
                          ...prevState,
                          [toy._id]: false,
                        }))
                      }
                      toy={toy}
                      handleToyUpdate={handleToyUpdate}
                    />
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
