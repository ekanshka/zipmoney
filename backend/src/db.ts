import mongoose from 'mongoose'
import 'dotenv/config'

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URL as string).then(() => {
            console.log('database connected!');
        })
    } catch (error) {
        console.log('error connecting to mongoDB', error);
    }
}

connectDB();

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
})

export const User = mongoose.model('User', userSchema);