const nodemailer = require('nodemailer');

function createMailTransporter() {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "tanvisharma2703@gmail.com",
            pass: "bqsb eyop otle oshe"
        },
    });

    return transporter;
}
module.exports = createMailTransporter;