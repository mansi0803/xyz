const express=require('express');
const bodyParser= require('body-parser');
const nodemailer= require('nodemailer');
const multer= require('multer');
const cors=require('cors');
const app=express();
const upload = multer({dest:'uploads/'});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',()=>{
    resizeBy.send('welcome to my forma')
})

 app.post('/app/forma',upload.single('file'),(req,res)=>{
    const { name, email, email2, body } = req.body;
  const file = req.file;
 
  const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port:465,
    auth: {
      user: '',
      pass: '',
    },
  });
   

  const mailOptions = {
    from: 'mansiagarwaldev@gmail.com',
    to: `${email},${email2}`,
    subject: 'New email from mansi',
    text: `
      Name: ${name}
      Email: ${email}
      Body: ${body}
    `,
    attachments: [
      {
        filename: file.originalname,
        path: file.path,
      },
    ],
  };

  smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ success: false });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ success: true });
    }
  });
  smtpTransport.close();
})

const PORT= process.env.PORT||3001;

app.listen(PORT,()=>{
    console.log(`server starting at the port ${PORT}`);
})