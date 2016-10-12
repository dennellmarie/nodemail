'use strict';

const {logger} = require('./utilities/logger');
const {sendEmail} = require('./emailer');

const {FROM_EMAIL, FROM_NAME, TO_EMAIL} = process.env;
// we log some errors if these env vars aren't set
if (!(FROM_EMAIL && FROM_NAME && TO_EMAIL)) {
  logger.error('Missing required config var in `.env`');
}

const alertMiddleware = (errorTypes) => (err, req, res, next) => {
  if ((errorTypes).find(eType => err instanceof eType) !== undefined) {
    logger.info(`Attempting to send error alert email to ${TO_EMAIL}`);
    const data = {
      'FromEmail': FROM_EMAIL,
      'FromName': FROM_NAME,
      'Subject': `SERVICE ALERT: ${err.name}`,
      'Text-part': `Something went wrong. Here's what we know: \n\n${err.message}\n\n${err.stack}`,
      'Recipients': [{'Email': TO_EMAIL},]
    };
    sendEmail(data);
  }
  next(err);
};

module.exports = {alertMiddleware};

//js file called alerts.js

//what goes in that file
//what modules to require
//can you get the errors to display in that module

//see if you can use the middleware - service.js -> app.use



//require('./emailer')
//alertMiddleware = (ErrorType)=> (req,res,next){
  
  //data object