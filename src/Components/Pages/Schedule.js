import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

const styles = {
    center: {
        textAlign: 'center'
    },
    form: {
        paddingTop: 20,
    }
}

function Schedule(props) {

    const [newCal, setNewCal] = useState(false)
    const [calName, setCalName] = useState('')

    const handleNewCal = (e) => {
        e.preventDefault()
        setNewCal(true)
    }

    const handleName = (event) => {
        setCalName(event.target.value)
    }

    const newCalForm = () => {
        return (
            <Form style={styles.form}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Calendar Name</Form.Label>
                    <Form.Control onChange={handleName} type="name" placeholder="Enter name" />
                </Form.Group>
            </Form>
        )
    }

    return (
        <div>
            <Container fluid='md'>
                <h2 style={styles.center}>The schedule</h2>
                <Button onClick={handleNewCal}>New Calendar</Button>
                {newCal ? newCalForm() : null}
            </Container>
        </div>
    )
}

export default Schedule