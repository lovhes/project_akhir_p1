var nodemailer = require('nodemailer');

function mailing(data){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'testingprojecthacktiv@gmail.com',
          pass: 'hacktiv8'
        }
      });
      
      var mailOptions = {
        from: 'testingprojecthacktiv@gmail.com',
        to: `${data}`,
        subject: 'Anda telah terdaftar di reviewBook',
        text: 'https://desolate-garden-58832.herokuapp.com/'
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