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

    const handleAppt = (event) => {

    }

    const handleTime = (event) => {

    }

    const newCalForm = () => {
        return (
            <Form style={styles.form}>
                <Form.Group controlId="calName">
                    <Form.Label>Calendar Name</Form.Label>
                    <Form.Control onChange={handleName} type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="calAppt">
                    <Form.Label>Appointment Type</Form.Label>
                    <Form.Control onChange={handleAppt} type="appt" placeholder="Enter appointment type" />
                    <Form.Label>Appointment Duration</Form.Label>
                    <Form.Control as='select' onChange={handleTime} type="appt" placeholder="Enter the amount of time for this type of appointment">
                        <option value={15}>15 min</option>
                        <option value={30}>30 min</option>
                        <option value={45}>45 min</option>
                        <option value={60}>1 hour</option>
                        <option value={90}>1 hour 30 min</option>
                        <option value={120}>2 hour</option>
                        <option value={150}>2 hour 30 min</option>
                        <option value={180}>3 hour</option>
                        <option value={210}>3 hour 30 min</option>
                        <option value={240}>4 hour</option>
                        <option value={300}>5 hour</option>
                    </Form.Control>
                    <Button>Add another appointment</Button>
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