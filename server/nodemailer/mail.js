const nodemailer = require('nodemailer');
const { email } = require('../config/credentials.js');
const test = require('../test.js');

module.exports = function(app, path){
    app.post('/send', (req, res) => {
        console.log('What the fuck request: ', req);
        const output = `
        <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
            <tr>
                <td align="center" valign="top">
                    <table border="0" cellpadding="20" cellspacing="0" width="600" id="emailContainer">
                        <tr  style="background-color:#ffc107">
                            <td align="center" valign="top">
                                <table align="center" border="0" cellpadding="20" cellspacing="0" width="100%" id="emailHeader">
                                    <tr valign="top" align="center">
                                        <td style="color:#fff; font-family:Arial, Helvetica, sans-serif; font-size:27px; line-height: 45px; padding: 5px;">Artisan Date<br>Your Itinerary</td>
                                    </tr>                                                         
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" valign="top" style="padding:0">
                                <table border="0" cellpadding="20" cellspacing="0" width="100%" id="emailFooter">
                                    <img src="yellow-line.png" alt="" width="600px" style="border:0; margin:0; padding:0">
                                        <tr>
                                            <td align="center" valign="top" style="width: 10%; padding:30px 5px">
                                                    <span class="x_retina">
                                                            <img data-imagetype="External" src=${test.events.image_url}
                                                                alt="" width="110px"
                                                                style="border:0; margin:0; padding:0; border-radius:15px; ">
                                                    </span>
                                            </td>
                                            <td align="center" valign="top" style="width: 45%; padding:30px 5px; text-align: left; font-size:20px;">
                                                <span>${test.events.name}</span><br>
                                                <img data-imagetype="External" src="4-star.png"
                                                    alt="" width="135px"
                                                    style="border:0; margin:0; padding:10px 0 0 0; ">
                                                <br>
                                                <span style="color:#ffc107; font-size:22px; ">$$</span>
                                                 
                                            </td>
                                            <td align="center" valign="top" style="width: 45%; padding:30px 5px; text-align: right; font-size:18px;">
                                                <span>100 Goldenwest St</span><br>
                                                <span>Huntington Beach </span><span>CA 92648</span><br>                                             
                                                <span>(714) 841-8644</span><br>
                                            </td>                                            
                                        </tr>     
                                </table>
                                <table border="0" cellpadding="20" cellspacing="0" width="100%" id="emailFooter">
                                    <img src="yellow-line.png" alt="" width="600px" style="border:0; margin:0; padding:0">
                                    <tr>
                                        <td align="center" valign="top" style="width: 10%; padding:30px 5px">
                                                    <span class="x_retina">
                                                            <img data-imagetype="External" src=${test.food.image_url}
                                                                alt="" width="110px"
                                                                style="border:0; margin:0; padding:0; border-radius:15px; ">
                                                    </span>    

                                        </td>
                                        <td align="center" valign="top" style="width: 45%; padding:30px 5px; text-align: left; font-size:20px;">
                                                <span>${test.food.name}</span><br>
                                                <img data-imagetype="External" src="4-star.png"
                                                    alt="" width="135px"
                                                    style="border:0; margin:0; padding:10px 0 0 0; ">
                                                <br>
                                                <span style="color:#ffc107; font-size:22px; ">$$</span>
                                                 
                                        </td>
                                        <td align="center" valign="top" style="width: 45%; padding:30px 5px; text-align: right; font-size:18px;">
                                                <span>100 Goldenwest St</span><br>
                                                <span>Huntington Beach </span><span>CA 92648</span><br>                                             
                                                <span>(714) 841-8644</span><br>
                                        </td>                                            
                                    </tr>     
                            </table>
                        <table border="0" cellpadding="20" cellspacing="0" width="100%" id="emailFooter">
                                <img src="yellow-line.png" alt="" width="600px" style="border:0; margin:0; padding:0">
                                <tr>
                                        <td align="center" valign="top" style="width: 10%; padding:30px 5px">
                                                <span class="x_retina">
                                                        <img data-imagetype="External" src=${test.drinks.image_url}
                                                            alt="" width="110px"
                                                            style="border:0; margin:0; padding:0; border-radius:15px; ">
                                                </span> 

                                        </td>
                                        <td align="center" valign="top" style="width: 45%; padding:30px 5px; text-align: left; font-size:20px;">
                                            <span>${test.drinks.name}</span><br>
                                            <img data-imagetype="External" src="4-star.png"
                                                alt="" width="135px"
                                                style="border:0; margin:0; padding:10px 0 0 0; ">
                                            <br>
                                            <span style="color:#ffc107; font-size:22px; ">$$</span>
                                             
                                        </td>
                                        <td align="center" valign="top" style="width: 45%; padding:30px 5px; text-align: right; font-size:18px;">
                                            <span>100 Goldenwest St</span><br>
                                            <span>Huntington Beach </span><span>CA 92648</span><br>                                             
                                            <span>(714) 841-8644</span><br>
                                        </td>                                            
                                    </tr>     
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>`
            
        nodemailer.createTestAccount((err, account) => {
    
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: email.user,
                    pass: email.password
                }
            });
        
            let mailOptions = {
                from: 'Datenight '+ email.user,
                to: req.body.email,
                subject: 'Your Dateplan has been setup',
                html: output
            };
        
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                res.send('email sent!')
            });
        });
    })
}
