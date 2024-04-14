//used instruction from weblesson, mailtrap, and Ethereal to adapt usage of Nodejs to sending an email specifically

const express = require('express');
const bodyParser = require('body-parser');
const{check,validationResult}=require('express-validator');
const nodemailer=require('nodemailer');
const ejs = require('ejs');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.json());
app.get('/', (request, response) => {
	response.render('contact', { errors : '' });
});
app.post('/send',
    [
		check('email').isEmail().withMessage('Invalid Email Address'),
		check('message').notEmpty().withMessage('Message is required')
    ], (request, response) => {

		const errors = validationResult(request);

		if(!errors.isEmpty())
		{
			response.render('contact', { errors : errors.mapped() });
		}else
		{
			const transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false, // Use true for port 465, false for all other ports
                auth: {
                  user: "maddison53@ethereal.email",
                  pass: "jn7jnAPss4f63QBp6D",
                },
              });
            
            const mail_option = {
                from : request.body.email,
                to : 'hntrlee2@gmail.com',
                subject : request.body.subject,
                text : request.body.message
            };
            transporter.sendMail(mail_option, (error, info) => {
                if(error)
                {
                    console.log(error);
                }
                else
                {
                    response.redirect('/success')
                }
            })
            
        }
    });

    app.get('/success', (request, response) => {
        response.send('alert("Message has been sent")')
    });

    app.listen(3000,() => {

        console.log('Server started on port 3000');
    });