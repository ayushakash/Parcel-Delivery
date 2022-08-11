var nodemailer = require('nodemailer');
const express = require('express');
const app = express();
require('dotenv').config()
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var cors = require('cors');
app.use(cors());

app.post('/email', cors(), async (req, res) => {

    res.setHeader('Content-Type', 'application/x-www-form-urlencoded');

    let address = req.body.address;
    let semail = req.body.semail;
    let remail = req.body.remail;
    let name = req.body.name;
    let total = req.body.total;
    let tNumber = req.body.tNumber;

    console.log((req.body))

    res.send({'Email Status': 'Sent'})

    await sendEmail(name, semail, remail, total, address, tNumber);

    function sendEmail(name, semail, remail, total, address, tNumber) {
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 465,
            auth: {
                user: process.env.REACT_APP_EMAIL_ID,
                pass: process.env.REACT_APP_PASSWORD
            }
        });

        transporter.sendMail({
            from: 'info@chardeevari.in',
            to: remail,
            cc: semail,
            subject: 'Order Confirmed with Express Parcel',
            html: '<h1>Hello ' + name + ',</h1> <h1 style="color:#008000"> Your courier order wit' +
                    'h Express Parcel was confirmed!</h1><h2>' +
                    `Your delivery cost is Rs. ` + total + ' ,Parcel will be delivered to </h2><h2>' +
                    'Address:-</h2><h2>' + address + '</h2><h2>with Tracking Number :</h2><h2>' +
                    tNumber + '</h2><br>'

        });
    }
})

app.listen(3001, () => {

    console.log('server running at port 3001');

})
