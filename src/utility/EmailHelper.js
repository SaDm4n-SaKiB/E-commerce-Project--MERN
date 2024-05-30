// const nodemailer=require('nodemailer');
// const EmailSent=async (EmailTo,EmailText,EmailSubject)=>{
//     let transport= nodemailer.createTransport({
//         host: "mail.teamrabbil.com",
//         port: 25,
//         secure: false,
//         auth: {user: "info@teamrabbil.com", pass: '~sR4[bhaC[Qs'},
//         tls: {rejectUnauthorized: false},
//     })
//     let mailOption={
//         from:"MERN Ecommerce Solution <info@teamrabbil.com>",
//         to:EmailTo,
//         subject:EmailSubject,
//         text:EmailText
//     }
//     return await transport.sendMail(mailOption)
// }

// module.exports=EmailSent;

const nodemailer=require('nodemailer');
const EmailSent=async (EmailTo,EmailText,EmailSubject)=>{
    let transport= nodemailer.createTransport({
        host: "mail.amitjs.com",
        port: 465,
        secure: true,
        auth: {user: "test@amitjs.com", pass: 'QB)*j9g?r]Sk'},
   
        
    })
    let mailOption={
        from:"MERN Ecommerce Solution <info@teamrabbil.com>",
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText
    }
    return await transport.sendMail(mailOption)
}

module.exports=EmailSent;