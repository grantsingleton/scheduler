import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import AddIcon from '@material-ui/icons/Add'
import AppointmentType from '../Schedule/AppointmentType'
import RemoveIcon from '@material-ui/icons/Remove'

const styles = {
    center: {
        textAlign: 'center'
    },
    form: {
        paddingTop: 20,
    },
    button: {
        marginTop: 10,
        marginRight: 5,
    }
}

function Schedule(props) {

    const [newCal, setNewCal] = useState(false)
    const [calName, setCalName] = useState('')
    const [appts, setAppts] = useState([])
    const [apptTypes, setApptTypes] = useState([<AppointmentType setAppts={setAppts} appts={appts} key={0} />])

    const handleNewCal = (e) => {
        e.preventDefault()
        setNewCal(true)
    }

    const handleName = (event) => {
        setCalName(event.target.value)
    }

    const handleNewAppt = (e) => {
        e.preventDefault()
        setApptTypes([...apptTypes, <AppointmentType setAppts={setAppts} appts={appts} key={apptTypes.length} />])
    }

    const handleRemoveAppt = (e) => {
        e.preventDefault()
        var newArr = apptTypes.splice(0, apptTypes.length - 1)
        setApptTypes(newArr)
    }

    const handleSave = (e) => {
        e.preventDefault()
        alert('Save Calendar')
    }

    const newCalForm = () => {
        return (
            <div>
                <Form style={styles.form}>
                    <Form.Group controlId="calName">
                        <Form.Label>Calendar Name</Form.Label>
                        <Form.Control onChange={handleName} type="name" placeholder="Enter name" required/>
                    {apptTypes}
                        <Button 
                            size='sm' 
                            style={styles.button} 
                            variant='outline-secondary'
                            onClick={handleNewAppt}
                        >
                            <AddIcon /> Add another appointment type
                        </Button>
                        <Button 
                            size='sm' 
                            style={styles.button} 
                            variant='outline-danger'
                            onClick={handleRemoveAppt}
                        >
                            <RemoveIcon /> Remove
                        </Button>
                    </Form.Group>
                    <Button 
                    type="submit"
                    style={styles.button}
                    //onClick={handleSave}
                    >
                        Save Calendar
                    </Button>
                </Form>
            </div>
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