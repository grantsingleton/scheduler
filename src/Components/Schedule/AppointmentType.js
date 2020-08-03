import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

function AppointmentType({ setAppts, appts }) {

    const [apptType, setApptType] = useState('')
    const [minutes, setMinutes] = useState(15)

    const handleAppt = (event) => {
        setApptType(event.target.value)
        setAppts([...appts, {type: event.target.value, minutes}])
    }

    const handleTime = (event) => {
        setMinutes(parseInt(event.target.value))
        setAppts([...appts, {type: apptType, minutes: parseInt(event.target.value)}])
    }


    return (
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
        </Form.Group>
    )
}

export default AppointmentType