const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const port = 3000;

app.use(express.json());

// creating all the todos
app.post("/todo", (req, res) => {
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

});

// seeing all the todos
app.get("/todos", (req, res) => {

});

// marking todos as done aka updating all the todos
app.put("/completed", (req, res) => {
    // adding the logic for input validation
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }
})

app.listen(port, () => {
    console.log(`you server is listening on the port ${port}`);
})