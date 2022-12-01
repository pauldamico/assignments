import React,{useState, useContext} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function CommentForm (props){

    const [comment, setComment] = useState({})

    function commentChangeHandler (event){
        const {name, value} = event.target
        setComment(prev=>({...prev, [name]:value}))
    }

    function submitComment (event){
event.preventDefault()
props.addComment(comment)
    }
    return (
             <Form>
        <Form.Group className="mb-3" >      
          <Form.Control name="comment" onChange={commentChangeHandler} type="text" placeholder="Enter Comment" />    
        </Form.Group>
  
 
        <Button onClick={submitComment} variant="primary" type="submit">
          Comment
        </Button>
      </Form>
    )
}