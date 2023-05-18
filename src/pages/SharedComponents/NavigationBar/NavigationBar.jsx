import React, { useContext } from 'react';
import { Button, Container, Form, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Toy world</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='text-decoration-none d-flex align-items-center  m-2' to="/home">Home</Link>
                            <Link className='text-decoration-none d-flex align-items-center  m-2' to="/home">All Toys</Link>
                            <Link className='text-decoration-none d-flex align-items-center  m-2' to="/home">My Toys</Link>
                            <Link className='text-decoration-none d-flex align-items-center  m-2' to="/home">Add A Toy</Link>
                            <Link className='text-decoration-none d-flex align-items-center  m-2' to="/home">Blogs</Link>

                            <NavDropdown title="Toy Category" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {
                                user && <Image title={user?.displayName} style={{ maxWidth: '40px', height: '40px' }} src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" roundedCircle />
                            }
                            <Nav.Link href="#deets">Login</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Logout
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;