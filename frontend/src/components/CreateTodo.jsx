export function CreateTodo(){
    return <div>
        
        <input style={{
            padding : 10,
            margin : 20,
            marginBottom : 0
        }} type="text" placeholder="title"/> <br/>
        
        <input style={{
            padding : 10,
            margin : 20,
            marginTop : 10,
        }} type="text" placeholder="description"/> <br/>

        <button style={{
            padding : 10,
            marginLeft : 75,
           
        }}>Add a todo</button>
    </div>
}