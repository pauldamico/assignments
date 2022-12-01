import React, {useContext} from "react"
import { IssueContext } from "../context/IssueProvider"
export default function Issue (props){

const {likeIssue, dislikeIssue} = useContext(IssueContext)

const {issue, likes, dislikes, _id} = props

function addLike (){
    likeIssue(_id)
}

function addDislike (){
    dislikeIssue(_id)
}

    return (
        <div>
            <h1>{issue}</h1>
            <section onClick={addLike}>Like {likes.length} </section> <section onClick ={addDislike}>Dislike {dislikes.length} </section>   

        </div>
    )
    }