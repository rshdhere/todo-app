const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// creating all the todos

// seeing all the todos

// marking todos as done aka updating all the todos

app.listen(port, () => {
    console.log(`you server is listening on the port ${port}`);
})