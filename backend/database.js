const mongoose = require("mongoose");
const types = require("./types");

const connectDB = async () => {
    await mongoose.connect(
        process.env.MONGODB_URL
    );
}

const todoSchema = new mongoose.Schema({
    
    title : {
        type : String
    },

    description : {
        type : String
    },

    completed : {
        type : Boolean
    }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {connectDB, Todo}