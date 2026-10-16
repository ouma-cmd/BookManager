import mongoose from "mongoose"

async function connectDb() {
  try {
    const connect = await mongoose.connect(process.env.URLDATABASE);
    console.log("connect");
    
  } catch (error) {
    console.log("no connect");
    
  }
}
export default connectDb