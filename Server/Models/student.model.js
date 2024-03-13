import mongoose from 'mongoose'
import Mentor from './mentor.model';

const studentSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique:true,
    },
    rollNo:{
        type:Number,
        required: true,
        unique:true,
    },
    marks:{
        type : {
            ideation: {
                type: Number,
                default: 0
            },
            execution: {
                type: Number,
                default: 0
            },
            viva: {
                type: Number,
                default: 0
            },
            total: {
                type: Number,
                default: 0
            }
        },
        "default" : {
            ideation: 0,
            execution: 0,
            viva: 0,
            total:0
        }
    },
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Mentor
    },
    locked: {
        type: Boolean,
        default: false
    }

},{timestamps: true});

studentSchema.pre('save', function(next) {
    this.marks.total = this.marks.ideation + this.marks.execution + this.marks.viva;
    next();
});

const Student=mongoose.model('Student', studentSchema)

export default Student;