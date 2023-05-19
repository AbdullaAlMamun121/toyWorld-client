import React, { useContext } from 'react';
import {  Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
 
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Toy world</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='text-decoration-none d-flex align-items-center  m-2' to="/">Home</Link>
                            <Link className='text-decoration-none d-flex align-items-center  m-2' to="/allToys">All Toys</Link>
                            {user && <Link className='text-decoration-none d-flex align-items-center  m-2' to="/myToys">My Toys</Link>}
                            {user && <Link className='text-decoration-none d-flex align-items-center  m-2' to="/createToy">Add A Toy</Link>}
                            <Link className='text-decoration-none d-flex align-items-center  m-2' to="/home">Blogs</Link>

                          
                        </Nav>
                        <Nav>
                            {user && (
                                <Image
                                    title={user.displayName}
                                    style={{ maxWidth: '40px', height: '40px' }}
                                    src={user.photoURL}
                                    roundedCircle
                                />
                            )}
                            {user ? (
                                <Link onClick={handleLogout} className='text-decoration-none d-flex align-items-center m-2'>Logout</Link>
                            ) : (
                                <Link to="/login" className='text-decoration-none d-flex align-items-center m-2'>Login</Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;
