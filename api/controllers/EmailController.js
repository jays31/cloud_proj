/**
 * EmailController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var request = require('request');
module.exports = {
    create: function (req, res) {
        var demail = req.body.email_res;
        var nodemailer = require('nodemailer');
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            auth: {
                user: 'fooddonor0@gmail.com',
                pass: 'Donor@123'
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        let HelperOptions = {
            from: 'fooddonor0@gmail.com',
            to: demail,
            subject: 'Sign Up',
            text: 'We have recieved your sign-up form. Please go to login to continue.'
        };
        transporter.sendMail(HelperOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log("The message was sent!");
            console.log(info);
            var log_az = 'Email was sent successfully';
            logger.info(log_az);
            request.get({ url: 'https://cloud-grp-10.azurewebsites.net/logs/create?log=' + (log_az) });
        });
        // return res.redirect("/login");
    }
};
