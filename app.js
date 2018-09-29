require('dotenv').config()

const AWS = require('aws-sdk');
const ses = new AWS.SES();

const params = {
    Destination: {
        ToAddresses: [process.env.TO_EMAIL]
    },
    Message: {
        Body: {
            Html: {
                Charset: 'UTF-8',
                Data: 'An example of sending email with ses and aws-sdk on Node.js : <a class="ulink" href="https://github.com/mdhelaluddin-ctg-bd/ses-email-nodejs" target="_blank">Check here</a>.'
            },
            Text: {
                Charset: 'UTF-8',
                Data: 'An example of sending email with ses and aws-sdk on Node.js.'
            }
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Test email from code'
        }
    },
    ReturnPath: process.env.FROM_EMAIL,
    Source: process.env.FROM_EMAIL
}

ses.sendEmail(params, (err, data) => {
    if (err) console.log(err, err.stack)
    else console.log(data)
})