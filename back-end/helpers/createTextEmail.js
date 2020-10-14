
async function createTextEmail (email,message) {
    return  {
        to: `${email}`,
        from: 'a36311@thanglong.edu.vn',
        subject: 'RESET YOUR PASSWORD (TOKEN VALID IN 5 min)',
        text: `${message}`,
    };
   
}
module.exports = {
    createTextEmail,
}