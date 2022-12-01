import React, {useState, useContext} from "react"
import Issue from "./Issue.js"
import { IssueContext } from "../context/IssueProvider"
export default function IssueList (){
    const {issues} = useContext(IssueContext)

    return (
        <div>
   {issues.map(issue=><Issue key={issue._id} {...issue} />)}
        </div>
    )
    }