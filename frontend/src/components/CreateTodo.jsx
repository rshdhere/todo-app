// not yet implemented updateTodos

import { useState } from "react";

export function CreateTodo(){
    
    // react-query
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    return <div>
        
        <input id="title" style={{
            padding : 10,
            margin : 20,
            marginBottom : 0
        }} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(value)
        }}/> <br/>
        
        <input id="desc" style={{
            padding : 10,
            margin : 20,
            marginTop : 10,
        }} type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(value)
        }}/> <br/>

        <button style={{
            padding : 10,
            marginLeft : 75,
           
        }} onClick={() => {
            fetch("http://localhost:3000/todo", {
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description : description
                }), 
                headers : {
                    "Content-type" : "application/json"
                }
            })
            .then(async function (res) {
                const json = await res.json();
                alert("Todo Added");
            })
        }}>Add a todo</button>
    </div>
}