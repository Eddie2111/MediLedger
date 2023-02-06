import { CreateNewUser } from '../controllers/Auth';

export default function handler(req, res) {
    if (req.method === 'POST') {
      console.log(req.body);
      const data = req.body;
      if (data.password === data.confirmPassword){
        CreateNewUser(data)
        .then(()=>{res.status(200).json({message:"User Created"})})
        .catch((error)=>{res.status(400).json({message:error})})
      }
    } else {
      res.json({status:302,message:"Bad Request"})
    }
  }