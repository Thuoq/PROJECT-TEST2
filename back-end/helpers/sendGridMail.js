const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(
    process.env.SECRET_SENDGRID
  );
function sendGridMail (email) {
    const msg = {
        to: `${email}`,
        from: 'a36311@thanglong.edu.vn',
        subject: 'SUCCESS ',
        text: 'Thank you for purchasing our products ',
      };
      sgMail
        .send(msg)
        
        .catch(error => {
          console.error(error);
          if (error.response) {
            console.log("ERR AT: SEND GRID")
            console.error(error.response.body);
          }
        });
}
module.exports = {
    sendGridMail,
}