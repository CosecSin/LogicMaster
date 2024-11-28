import mongoose from "mongoose";

// Directly set your MongoDB connection string here
const uri = "mongodb+srv://CosecSin:cosecsin@cluster0.2706y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connect;
