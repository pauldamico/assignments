import React, { useState } from "react";
import EditCommentForm from "./EditCommentForm";
import Dropdown from "react-bootstrap/Dropdown";
export default function Comment(props) {
  const [toggleCommentEdit, setToggleCommentEdit] = useState(false);
  const { comment, _id, removeComment, userId, user, editComment } = props;

  function deleteComment() {
    removeComment(_id);
  }

  function editCommentToggler() {
    setToggleCommentEdit(!toggleCommentEdit);
  }

  return (
    <div>
        <div className="comment-div">
        {!toggleCommentEdit && <div>{comment}</div>}          
      {toggleCommentEdit && <EditCommentForm
      editCommentToggler={editCommentToggler}
        editComment={editComment}
        _id={_id}
        comment={comment}
        userId={userId}
        user={user}
      />}

      {userId === user &&  
      
      
      <Dropdown >
              <Dropdown.Toggle  size="sm" variant="white" id="dropdown-basic">
                ...
              </Dropdown.Toggle>
              <Dropdown.Menu >
                <Dropdown.Item href="#/action-1">
                  {user === userId && <section onClick={editCommentToggler}>edit</section>}
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {" "}
                  {user === userId && <section onClick={deleteComment}>Delete</section>}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>}

  
  </div>
    </div>
  );
}
