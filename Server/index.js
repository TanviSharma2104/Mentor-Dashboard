const mongoose = require('mongoose')

require('dotenv').config();
const app=require(`./app.js`)


mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to database!");
}).catch((err)=>{
    console.log(err);
})

const PORT=process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server running on port`+PORT);
});

