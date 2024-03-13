import mongoose from 'mongoose'
import Student from './student.model';

const mentorSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique:true,
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Student
    }]
    

},{timestamps: true});


const Mentor=mongoose.model('Mentor', mentorSchema)

export default Mentor;