export function CreateTodo(){
    return <div>
        <input style = {{
            padding : 10,
            margin : 10
        }} type="text" placeholder="title"/> <br></br>
        <input style = {{
            padding : 10,
            margin : 10
        }} type="text" placeholder="description"/> <br></br>

        <button> Add a todo</button>
    </div>
}