import React, { useState, useContext, useEffect } from "react";
import Comment from "./Comment.js";
import CommentForm from "./CommentForm.js";
import { IssueContext } from "../context/IssueProvider";
import { UserContext } from "../context/UserProvider";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import EditIssueForm from "./EditIssueForm.js";
import Dropdown from "react-bootstrap/Dropdown";

export default function Issue(props) {
  const { likeIssue, dislikeIssue, userAxios, deleteIssue, editIssue } =
    useContext(IssueContext);
  const { token, userId } = useContext(UserContext);
  const { user, issue, likes, dislikes, _id } = props;
  const [comments, setComments] = useState([]);
  const [showCommentToggle, setShowCommentToggle] = useState(false);
  const [addCommentToggle, setAddCommentToggle] = useState(false);
  const [toggleIssueEdit, setToggleIssueEdit] = useState(false);
  function addLike() {
    likeIssue(_id);
  }

  function addDislike() {
    dislikeIssue(_id);
  }
  useEffect(() => {
    token &&
      userAxios.get(`/api/comment/list/${_id}`).then((res) => {
        setComments((prev) => res.data);
      });
  }, []);
  function listComments() {
    setShowCommentToggle(!showCommentToggle);
  }

  function toggleAddComment() {
    setAddCommentToggle(!addCommentToggle);
  }

  function addComment(comment) {
    const newComment = comment;
    userAxios.post(`/api/comment/create/${_id}`, newComment).then((res) => {
      setComments((prev) => [...prev, res.data]);
    });
  }

  function removeComment(commentId) {
    userAxios
      .delete(`/api/comment/${commentId}`)
      .then((res) => {
        setComments((prev) =>
          prev.filter((comment) => comment._id !== commentId)
        );
      })
      .catch((err) => console.log(err));
  }

  function removeIssue() {
    {
      user === userId && deleteIssue(_id, userId);
    }
  }

  function editIssueToggler() {
    setToggleIssueEdit(!toggleIssueEdit);
  }


  function editComment(commentId, updatedComment){   
    userAxios.put(`/api/comment/edit/${commentId}`, {comment:updatedComment.comment})
    .then(res=>{
       setComments(prev=>prev.map(item=>item._id === commentId ?{...item, comment:updatedComment.comment} : {...item}))  
    })
    .catch(err=>console.log(err))
}

  return (
    <div>
      <div>
        <div className="issue-div">
      {!toggleIssueEdit && <h1>{issue}</h1>}
      {user === userId &&
            <Dropdown>
              <Dropdown.Toggle variant="white" id="dropdown-basic">
                ...
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  {user === userId && <div onClick={editIssueToggler}>Edit Issue</div>}
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {" "}
                  {user === userId && <div onClick={removeIssue}>Delete Issue</div>}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>}</div>

        {toggleIssueEdit && (
          <EditIssueForm
            _id={_id}
            userId={userId}
            editIssue={editIssue}
            issue={issue}
            editIssueToggler={editIssueToggler}
          />
        )}
        <section onClick={listComments}>{comments.length} Comments</section>
        <div>
          {addCommentToggle && (
            <div>
              <CommentForm
                toggleAddComment={toggleAddComment}
                addComment={addComment}
              />
            </div>
          )}
           {showCommentToggle &&
          comments.map((comment) => (
            <Comment
              key={comment._id}
              {...comment}
              editComment={editComment}
              removeComment={removeComment}
              userId={userId}
            />
          ))}
          <div className="issue-lower-div">
            <section onClick={toggleAddComment}>Add Comment</section>
            <section onClick={addLike}>
              <FiThumbsUp /> {likes.length}{" "}
            </section>{" "}
            <section onClick={addDislike}>
              <FiThumbsDown /> {dislikes.length}{" "}
            </section>

           
          </div>
        </div>
       
      </div>
      <div></div>
    </div>
  );
}
