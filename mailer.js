var nodemailer = require('nodemailer');

function mailing(data){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'testingprojecthacktiv@gmail.com',
          pass: 'hacktiv8'
        }
      });
      console.log("=================================>" + data)
      var mailOptions = {
        from: 'testingprojecthacktiv@gmail.com',
        to: `${data}`,
        subject: 'Anda telah terdaftar di reviewBook',
        text: 'http://localhost:3000/'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
}

module.exports = mailing