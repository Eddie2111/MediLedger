import { CreateNewUser } from './controllers/Auth';
const crypto = require('crypto');
// console.log(crypto.randomUUID());

export default function handler(req, res) {
    if (req.method === 'POST') {
      console.log(req.body);
      const randomUUID = crypto.randomUUID().toString();
        const data = {
            id: randomUUID,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            nid: req.body.nid,
            phoneNo: req.body.phoneNo,
            licenseNo: req.body.licenseNo,
            userType: req.body.userType,
        }
      
      try{
        CreateNewUser(data)
        .then((data)=>{res.json({stats:200,message:"User Created"});console.log(data)})
        .catch((error)=>{res.json({stats:200,error});console.log("error")})
      }
        catch(error){
            console.log(error)
            res.status(302)
        }
      //res.send("hello")
    }
  }