import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Register = () => {
    return (
        <div>
            <Form className='commonForm'>
                <h3>Register</h3> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" className='bg-transparent'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className='bg-transparent'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" className='bg-transparent'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone No.</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone No." className='bg-transparent'/>
                </Form.Group>
                <div>
        
                    <div href='/'>Already have an Account? <a href='/login'>Login here!</a></div>
                </div>
                <Button variant="primary" type="submit" style={{ width: '100%' }}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Register