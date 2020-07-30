import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { Link, NavLink } from 'react-router-dom'

const styles = {
    link: {
        padding: 20,
    },
}

function Navigation(props) {
    return (
        <div>
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Schedule Me</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
            <NavLink style={styles.link} to='/schedule'>Schedule</NavLink>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
        </div>
    )
}

export default Navigation