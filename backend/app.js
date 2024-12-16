const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// creating all the todos
app.post("/todo", (req, res) => {
    // adding the logic for input validation

});

// seeing all the todos
app.get("/todos", (req, res) => {

});

// marking todos as done aka updating all the todos
app.put("/completed", (req, res) => {
    // adding the logic for input validation
})

app.listen(port, () => {
    console.log(`you server is listening on the port ${port}`);
})