import React, { useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <Form onSubmit={(e) => {
            e.preventDefault()
            props.submitAdmin(username, password)}}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="info" type="submit">
                Submit
            </Button>
            {' '}
            <Button onClick={() => props.setLogin(false)} variant="warning" type="button">
               Cancel
            </Button>
        </Form>)
    }

export default Login;
