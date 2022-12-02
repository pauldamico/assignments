import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export default function EditIssueForm(props) {
  const { editIssue, _id, editIssueToggler, issue } = props;
  const [editedIssue, setEditedIssue] = useState({ issue: issue });

  function editChangeHandler(event) {
    const { name, value } = event.target;
    setEditedIssue((prev) => ({ ...prev, [name]: value }));
  }

  function submitChangeHandler(event) {
    event.preventDefault();
    editIssue(_id, editedIssue);
    editIssueToggler();
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          value={editedIssue.issue}
          name="issue"
          onChange={editChangeHandler}
          type="text"
          placeholder="Edit Political Issue"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Button onClick={submitChangeHandler} variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
}
