'use strict';

const mailJet = require('node-mailjet');
const {logger} = require('./utilities/logger');

// stored in `.env` -- never store passwords, api keys
// etc. inside source code
const {MAILJET_KEY, MAILJET_SECRET} = process.env;

// we log some errors if these env vars aren't set
if (!(MAILJET_KEY && MAILJET_SECRET)) {
  logger.error('Missing required config var in `.env`');
}

// send an email using Mailjet.
// `emailData` is an object
const sendEmail = (emailData) => {
  const mailer = mailJet.connect(MAILJET_KEY, MAILJET_SECRET);
  logger.info(emailData);
  mailer
    .post('send')
    .request(emailData)
    .then(() => logger.info(
      `SUCCESS: \`sendAlertEmail\` sent email`))
    .catch((e) => logger.error(`FAILURE: problem sending email. ${e.message}`));
};

module.exports = {sendEmail};

// const data = {
//     'FromEmail': 'veronica@email.com',
//     'FromName': ;SERVICE ALERTS'',
//     'Subject': 'ALERT: a FooError occurred',
//     'Text-part': 'Something went wrong!!',
//     'Recipients': [{'Email': 'roger@smith.com'}]
// };



//js file called alerts.js

//what goes in that file
//what modules to require
//can you get the errors to display in that module

//see if you can use the middleware - service.js -> app.use



//require('./emailer')
//alertMiddleware = (ErrorType)=> (req,res,next){
  
  //data object
  
//   if(Errortype).find(err) ===undefined{
//     res.send(
//       logger.info(`attempting to send message but got ${}`));
      
      
//       sendmail(data)
//   }
  
  
// }