import React,{useState, useContext} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IssueContext } from "../context/IssueProvider"
export default function IssueForm (){
    const {addIssue} = useContext(IssueContext)
    const [issue, setIssue] = useState("")

    function issueChangeHandler (event){
    setIssue(event.target.value)
    }

    function submitIssue(event){
      console.log(issue)
        event.preventDefault()
        addIssue(issue)
        setIssue("")       
    }


    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
      
          <Form.Control name="issue" value={issue} onChange={issueChangeHandler} type="text" placeholder="Enter Political Issue" />
         
        </Form.Group>
  
 
        <Button onClick={submitIssue} variant="primary" type="submit">
          Post Issue
        </Button>
      </Form>
    )
    }