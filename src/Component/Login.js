import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Login = () => {
    return (
        <div>
            <Form className='commonForm'>
                <h3>Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <div>
                    <div><a href='/'>Forget Password</a></div>
                    <div href='/'>Don't have an Account? <a href='/register'>Register here!</a></div>
                </div>
                <Button variant="primary" type="submit" style={{ width: '100%' }}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Login