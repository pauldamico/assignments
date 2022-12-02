import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function EditCommentForm (props){
    
    const { editCommentToggler, editComment, _id, editToggler, comment, user, userId } = props;
    const [editedComment, setEditedComment] = useState({ comment: comment });
  
    function editChangeHandler(event) {
      const { name, value } = event.target;
      setEditedComment((prev) => ({ ...prev, [name]: value }));
    }
  
    function submitChangeHandler(event) {
      event.preventDefault();
      editComment(_id, editedComment);
      editCommentToggler()
     
    }
  
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={editedComment.comment}
            name="comment"
            onChange={editChangeHandler}
            type="text"
            placeholder="Edit Comment"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
  
        <Button onClick={submitChangeHandler} variant="primary" type="submit">
          Save test
        </Button>
      </Form>
    );
  }