import { FindOneUser } from './controllers/Auth';
const jwt = require('jsonwebtoken');

export default function handler(req, res) {
    if (req.method === 'POST') {
      console.log(req.body);
        const data = {
            email: req.body.email,
        }
        const password = req.body.password;
      
      try{
        FindOneUser(data)
        .then((data)=>{
            if(data.password === password){
                console.log("success");
                const tokenSet = jwt.sign({id:data.id,email:data.email},process.env.JWT_SECRET,{expiresIn: '7d'});
                res.setHeader('Set-Cookie', `token=${tokenSet}; HttpOnly=True, Secure=True, Expires=7d, SameSite=Strict`);
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