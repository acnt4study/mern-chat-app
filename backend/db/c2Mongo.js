import mongoose from "mongoose";

const c2Mongo = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (e) {
        console.error('Error conecting to MongoDB', e.message);
    }
}

export default c2Mongo;