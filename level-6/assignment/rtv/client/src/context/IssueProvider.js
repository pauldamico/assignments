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

const [issues, setIssues] = useState([])

function addIssue (issue){
    const newIssue = issue
userAxios.post("/api/issue/create", newIssue)
.then(res=>setIssues(prev=>([...prev, res.data])))
.catch(err=>console.log(err))
}

function getUserIssues (){
    userAxios.get("/api/issue/user")
    .then(res=>setIssues(prev=>(res.data)))
    .catch(err=>console.log(err))
}

function likeIssue (issueId) {
    userAxios.post(`/api/issue/like/${issueId}`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}

function dislikeIssue (issueId) {
    userAxios.post(`/api/issue/dislike/${issueId}`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}

    
    return(
        <IssueContext.Provider value={{addIssue, issues, getUserIssues, likeIssue, dislikeIssue}}>
{props.children}
        </IssueContext.Provider>
    )
}