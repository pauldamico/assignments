import React, { useState, useContext, useEffect } from "react";
import Comment from "./Comment.js";
import CommentForm from "./CommentForm.js";
import { IssueContext } from "../context/IssueProvider";
import { UserContext } from "../context/UserProvider";
import {FiThumbsUp, FiThumbsDown} from 'react-icons/fi'



export default function Issue(props) {
  const { likeIssue, dislikeIssue, userAxios } = useContext(IssueContext);
  const { token, userId } = useContext(UserContext);
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
      });
  }

  function removeComment(commentId){
    userAxios.delete(`/api/comment/${commentId}`)
    .then(res=>{
        console.log(res)
    setComments(prev=>prev.filter(comment=>comment._id !== commentId ))
    })
    .catch(err=>console.log(err))
  }


  return (
    <div>
      <div>
      <h1>{issue}</h1>
    
      <section onClick={listComments}>{comments.length} Comments</section>
      <div>
      {addCommentToggle && <div>
    <CommentForm toggleAddComment={toggleAddComment} addComment={addComment}/>
      </div>}
      <div className="issue-lower-div">
      <section onClick={toggleAddComment}>Add Comment</section>      
  
      <section onClick={addLike}><FiThumbsUp/> {likes.length} </section>{" "}
      <section onClick={addDislike}><FiThumbsDown/> {dislikes.length} </section>
      </div>
      </div>
      {showCommentToggle &&
        comments.map((comment) => <Comment key={comment._id} {...comment} removeComment={removeComment} userId={userId}/>)}
        </div>
        <div>

        </div>
    </div>
  );
}
