import React, {useState, useContext} from "react"
import Issue from "./Issue.js"
import { IssueContext } from "../context/IssueProvider"
import { UserContext } from "../context/UserProvider"
export default function AllIssueList (){
    const {allIssues} = useContext(IssueContext)
    const {token} = useContext(UserContext)

    return (
        <div>     
   {token && allIssues.map(issue=><Issue key={issue._id} {...issue} />)}
        </div>
    )
    }