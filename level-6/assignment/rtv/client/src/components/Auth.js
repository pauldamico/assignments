import React, { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { UserContext } from "../context/UserProvider";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Auth() {
  const navigate = useNavigate()
  const { token, signUp, login } = useContext(UserContext);  
  const initValue =  {username:"", password:""};

  const [signUpInfo, setSignUpInfo] = useState();
  const [toggle, setToggle] = useState(false)

function updateUserChangeHandler (event){
  const {name, value} = event.target
  setSignUpInfo(prev=>({...prev, [name]:value}))

}

function signUpUser (event){
    event.preventDefault()
    signUp(signUpInfo)
    navigate('/')
}

function logInUser (event){
  event.preventDefault()
  login(signUpInfo)
  navigate('/')
}

function toggleAuth (){
  setToggle(!toggle)
}


  return (<>


  <Container>
    
<Row>
  <Col></Col>
  <Col xs={5}>        <div>
           
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control name="username" onChange={updateUserChangeHandler} type="text" placeholder="Enter username" />
   
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control name = "password" onChange={updateUserChangeHandler} type="text" placeholder="Enter password" />
        <Form.Text className="text-muted">
         
        </Form.Text>
        <Form.Text className="text-muted" onClick={toggleAuth}>
         {!toggle && "Don't Have a account? Click Here"}
        </Form.Text>
      </Form.Group>
      {!toggle ?<Button onClick = {logInUser} variant="primary" type="submit">
       Sign in
      </Button>
      :
      <Button onClick = {signUpUser} variant="primary" type="submit">
        Sign up
      </Button>}
  </Form>
           
               </div></Col>
  <Col></Col>
</Row>

</Container>

  </>)
}
