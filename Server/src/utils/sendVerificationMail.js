const createMailTransporter = require('../../config/createMailTransporter.js');

function sendVerificationMail(user) {
    const transporter = createMailTransporter();
    const mailOptions = {
        from: 'tanvisharma2703@gmail.com',
        to: user.email,
        subject: 'Evaluation Submission Confirmation',
        html: `<h1>Hello ${user.firstname}</h1><br>
        <h3>Your evaluation has been submitted successfully.</h3>`
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info.response);
        }
    });
}
module.exports = sendVerificationMail;