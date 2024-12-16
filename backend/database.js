const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://raashedmongodb:BxCsUtNhaoVXq0ru@cluster0.x05fg.mongodb.net/todo-app"
    );
}

module.exports = {connectDB}