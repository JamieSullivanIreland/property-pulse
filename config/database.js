import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  // if db is already connected, don't connect again
  if (connected) {
    console.log('DB already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Mongo DB connected');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
