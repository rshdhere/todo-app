const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { connectDB, Todo } = require("./database");
const app = express();
const port = 3000;

app.use(express.json());

// creating all the todos
app.post("/todo", async (req, res) => {
    // adding the logic for input validation
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg : "you entered the wrong inputs"
        });
        return;
    }
    // add mongodb here
    await Todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })

    res.json({
        msg : "Todo created!!"
    })

});

// seeing all the todos
app.get("/todos", async (req, res) => {
    const allTodos = await Todo.find();
    res.json({
        allTodos
    })
});

// marking todos as done aka updating all the todos
app.put("/completed", async (req, res) => {
    // adding the logic for input validation
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }

    await Todo.update({
        _id : req.body.id
    }, {
        completed : true
    })
})

connectDB()
    .then(() => {
        console.log("Database connection is established");
        app.listen(port, () => {
            console.log(`you server is listening on the port ${port}`);
        });
    })
    .catch((err) => {
        console.error("Error occured while connecting to the database")
    })