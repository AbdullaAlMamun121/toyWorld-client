import React, { useContext } from 'react';
import { Button, Container, Form, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);




    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

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

                            {
                                user && <Link className='text-decoration-none d-flex align-items-center  m-2' to="/myToys">My Toys</Link>
                            }
                            <Link className='text-decoration-none d-flex align-items-center  m-2' to="/createToy">Add A Toy</Link>
                            <Link className='text-decoration-none d-flex align-items-center  m-2' to="/home">Blogs</Link>

                            {/* <Tabs>
                                <TabList>
                                    {categories.map((category, index) => (
                                        <Tab key={index}>{category.title}</Tab>
                                    ))}
                                </TabList>

                                {categories.map((category, index) => (
                                    <TabPanel key={index}>
                                        {category.subCategories.map((subCategory, subIndex) => (
                                            <div key={subIndex}>{subCategory}</div>
                                        ))}
                                    </TabPanel>
                                ))}
                            </Tabs> */}
                            <Tabs>
                                <TabList>
                                    <Tab>Category 1</Tab>
                                    <Tab>Category 2</Tab>
                                    <Tab>Category 3</Tab>
                                </TabList>

                                <TabPanel>
                                    <h4>Sub-categories of Category 1</h4>
                                    {/* Render sub-categories for Category 1 */}
                                </TabPanel>
                                <TabPanel>
                                    <h4>Sub-categories of Category 2</h4>
                                    {/* Render sub-categories for Category 2 */}
                                </TabPanel>
                                <TabPanel>
                                    <h4>Sub-categories of Category 3</h4>
                                    {/* Render sub-categories for Category 3 */}
                                </TabPanel>
                            </Tabs>
                        </Nav>
                        <Nav>
                            {
                                user && <Image title={user?.displayName} style={{ maxWidth: '40px', height: '40px' }} src={user?.photoURL} roundedCircle />
                            }
                            {
                                user ? <Link onClick={handleLogout} className='text-decoration-none d-flex align-items-center m-2'>Logout</Link> :
                                    <Link to="/login" className='text-decoration-none d-flex align-items-center m-2'>Login</Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;