import { FindOneUser } from './controllers/Auth';
const crypto = require('crypto');
// console.log(crypto.randomUUID());

export default function handler(req, res) {
    if (req.method === 'POST') {
      console.log(req.body);
      const randomUUID = crypto.randomUUID().toString();
        const data = {
            email: req.body.email,
        }
        const password = req.body.password;
      
      try{
        FindOneUser(data)
        .then((data)=>{
            if(data.password === password){
                console.log("success");
                res.setHeader('Set-Cookie', `token=${crypto.randomUUID()}; HttpOnly=True, Secure=True`);
                res.status(200).json({message:"User Found",id:data.id})
            }
            else{
                console.log("not found");
                res.status(200).json({message:"User Not Found"})
            }
        })
        .catch((error)=>{res.json({error});console.log(error)})
      }
        catch(error){
            console.log(error)
            res.status(302)
        }
      //res.send("hello")
    }
  }