import mongoose from 'mongoose';

const connectDB = async() => {
    try {
        const response = await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Database connection error : ', error);
    }
}

export default connectDB;