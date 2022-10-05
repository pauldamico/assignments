import React, {useState} from "react"

export default function Edit (){

const [editThing, setEditThing] = useState()


    return(<div>
<div>
          <label>Enter URL</label>
          <input
            className="url-input"
            name="imgUrl"
         
            type="text"
        
          />
        </div>
        <div>
          <label>Enter Title</label>
          <input
            className="title-input"
            name="title"
           
            type="text"
        
          />
        </div>
        <div>      
          <label>Description</label>
          <input
            className="description-input"
            name="description"
         
            type="text"
        
          />
        </div>
        
    </div>)


}