import React, {useState, createContext} from 'react'
import axios from 'axios'



const userAxios = axios.create()
userAxios.interceptors.request.use(config =>{
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export const IssueContext = createContext()
export default function IssueProvider (props){
const initValue = [
   ]
const [userIssues, setUserIssues] = useState(initValue)
const [allIssues, setAllIssues] = useState(initValue)
function addIssue (issue){
    const newIssue = issue
userAxios.post("/api/issue/create", newIssue)
.then(res=>setUserIssues(prev=>([...prev, res.data])))
.then(res=>getAllIssues())
.catch(err=>console.log(err))
}

function getAllIssues (){
    userAxios.get("/api/issue/all")
    .then(res=>setAllIssues(prev=>(res.data)))
    .catch(err=>console.log(err))
   
}
function clearIssues (){
    setUserIssues(initValue)
    setAllIssues(initValue)
}

function getUserIssues (){
    userAxios.get("/api/issue/user")
    .then(res=>setUserIssues(prev=>(res.data)))
    .catch(err=>console.log(err))
  
}

function likeIssue (issueId) {
    userAxios.post(`/api/issue/like/${issueId}`)
    .then(res=>{    
        setUserIssues(prev=>prev.map(issue=>issue._id === issueId ? {...issue, dislikes:res.data.dislikes, likes:res.data.likes} : {...issue}))  
        setAllIssues(prev=>prev.map(issue=>issue._id === issueId ? {...issue, dislikes:res.data.dislikes, likes:res.data.likes} : {...issue}))      
     })            
    .catch(err=>console.log(err))
}

function dislikeIssue (issueId) {
    userAxios.post(`/api/issue/dislike/${issueId}`)
    .then(res=>{   
    setUserIssues(prev=>prev.map(issue=>issue._id === issueId ? {...issue, dislikes:res.data.dislikes, likes:res.data.likes} : {...issue})) 
    setAllIssues(prev=>prev.map(issue=>issue._id === issueId ? {...issue, dislikes:res.data.dislikes, likes:res.data.likes} : {...issue}))
})
 
    .catch(err=>console.log(err))
}

function deleteIssue(issueId){
    userAxios.delete(`/api/issue/${issueId}`)
    .then(res=>setUserIssues(prev=>prev.filter(issue=>issue._id !== issueId)))
    .then(res=>setAllIssues(prev=>prev.filter(issue=>issue._id !== issueId)))
    .catch(err=>console.log(err))
}
function editIssue(issueId, updatedIssue){   
    userAxios.put(`/api/issue/edit/${issueId}`, {issue:updatedIssue.issue})
    .then(res=>{
       setUserIssues(prev=>prev.map(item=>item._id === issueId && {...item, issue:updatedIssue.issue}))  
       setAllIssues(prev=>prev.map(item=>item._id === issueId && {...item, issue:updatedIssue.issue}))  
    })
    .catch(err=>console.log(err))
}


    
    return(
        <IssueContext.Provider value={{editIssue, deleteIssue, clearIssues, addIssue, userIssues, getUserIssues,getAllIssues, likeIssue, dislikeIssue, allIssues, userAxios}}>
{props.children}
        </IssueContext.Provider>
    )
}