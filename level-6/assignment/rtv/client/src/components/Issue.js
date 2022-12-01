import React, { useState, useContext, useEffect } from "react";
import Comment from "./Comment.js";
import CommentForm from "./CommentForm.js";
import { IssueContext } from "../context/IssueProvider";
import { UserContext } from "../context/UserProvider";
import {FiThumbsUp, FiThumbsDown} from 'react-icons/fi'



export default function Issue(props) {
  const { likeIssue, dislikeIssue, userAxios } = useContext(IssueContext);
  const { token } = useContext(UserContext);
  const { issue, likes, dislikes, _id } = props;
  const [comments, setComments] = useState([]);
  const [showCommentToggle, setShowCommentToggle] = useState(false);
  const [addCommentToggle, setAddCommentToggle] = useState(false);
  function addLike() {
    likeIssue(_id);
  }

  function addDislike() {
    dislikeIssue(_id);
  }
  useEffect(() => {
    token &&
      userAxios.get(`/api/comment/list/${_id}`).then((res) => {
        console.log(res.data);
        setComments((prev) => res.data);
      });
  }, []);
  function listComments() {
    setShowCommentToggle(!showCommentToggle);
  }

  function toggleAddComment(){    
    setAddCommentToggle(!addCommentToggle);
   
  }

  function addComment(comment){
    const newComment = comment
    userAxios.post(`/api/comment/create/${_id}`, newComment)
    .then((res) => {
        console.log(res.data);
        setComments(prev=>([...prev, res.data]))
        // setComments((prev) => res.data);
      });
  }

  return (
    <div>
      <div>
      <h1>{issue}</h1>
    
      <section onClick={listComments}>{comments.length} Comments</section>
      <div className="issue-lower-div">
      <section onClick={toggleAddComment}>Add Comment</section>      
      {addCommentToggle &&<CommentForm toggleAddComment={toggleAddComment} addComment={addComment}/>}  
      <section onClick={addLike}><FiThumbsUp/> {likes.length} </section>{" "}
      <section onClick={addDislike}><FiThumbsDown/> {dislikes.length} </section>
      </div>
      {showCommentToggle &&
        comments.map((comment) => <Comment key={comment._id} {...comment} />)}
        </div>
        <div>

        </div>
    </div>
  );
}
