const mongoose = require("mongoose");

async function connectDb() {
  try {
    const connect = await mongoose.connect(process.env.URLDATABASE);
    console.log("connect");
    
  } catch (error) {
    console.log("no connect");
    
  }
}
module.exports = connectDb