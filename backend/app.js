// future updates are yet to come
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { connectDB, Todo } = require("./database");
const cors = require("cors");
const app = express();
const port = 3000;
const dotenv = require("dotenv").config();


app.use(express.json());
app.use(cors());

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
        // if using zod the always pass the validated inputs like `parsedpayload.data`
        title : parsedPayload.data.title,
        description : parsedPayload.data.description,
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

    await Todo.findOneAndUpdate({
        _id : req.body.id
    }, {
        completed : true
    })

    res.json({
        msg : "Todo marked as completed"
    })
})

const startServer = async () => {
    try {
        await connectDB();
        console.log("Database connection is established");
        app.listen(port, () => {
            console.log(`Your server is listening on the port ${port}`);
        });
    } catch (err) {
        console.error("Error occurred while connecting to the database");
    }
};

startServer();
