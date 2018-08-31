import nodemailer from 'nodemailer';

export const sendEmail = (typeOfMail, data) => {
    return new Promise((resolve, reject) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_EMAIL,
                pass: process.env.MAIL_PASSWORD
            }
        });
        let mailOptions = {
            from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_EMAIL}>`,
            to: data.email || 'sarmad.zaki@progstream.com',
            subject: data.subject || 'Test Checking',
            text: ' ',
            html: typeOfMail
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return reject(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            return resolve(true)
        });
    });
};