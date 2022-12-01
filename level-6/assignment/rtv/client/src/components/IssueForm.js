import React,{useState, useContext} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IssueContext } from "../context/IssueProvider"
export default function IssueForm (){
    const {addIssue} = useContext(IssueContext)
    const [issue, setIssue] = useState()

    function issueChangeHandler (event){
        const {name, value} = event.target
        setIssue(prev=>({...prev, [name]:value}))
        console.log(issue)
    }

    function submitIssue(event){
        event.preventDefault()
        addIssue(issue)
    }


    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
      
          <Form.Control name="issue" onChange={issueChangeHandler} type="text" placeholder="Enter Political Issue" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
 
        <Button onClick={submitIssue} variant="primary" type="submit">
          Post Issue
        </Button>
      </Form>
    )
    }