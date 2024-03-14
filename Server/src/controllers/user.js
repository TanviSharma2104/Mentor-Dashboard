const {Mentor} = require("../models/mentor.model.js");
const {Student} =require("../models/student.model.js");
const {User}= require("../models/user.model.js");

//create Student 
exports.createStudent=async (req, res)=>{
    try {
        const { firstname, lastname, mobileNumber, city, state, address, pincode, rollNo, email } = req.body;
        let user = await (new User({
            firstname,
            lastname,
            mobileNumber,
            city,
            state,
            address,
            email,
            pincode
        })).save();
    
        await (new Student({
            profile: user._id,
            rollNo,
        })).save();

        res.status(200).json({
            message: "Student added"
        })
    } catch(err) {
        return res.status(500).json({
            message: "Server error occured",
            err
        })
    }
}

exports.createMentor = async (req, res) => {
    try {
        const { firstname, lastname,email, mobileNumber, city, state, address, pincode, faculityId, specialization } = req.body;
        let user = await (new User({
            firstname,
            lastname,
            email,
            mobileNumber,
            city,
            state,
            address,
            pincode
        })).save();
    
        await (new Mentor({
            profile: user._id,
            faculityId,
            specialization
        })).save();

        res.status(200).json({
            message: "Mentor added"
        })
    } catch(err) {
        return res.status(500).json({
            message: "Server error occured",
            err
        })
    }
}