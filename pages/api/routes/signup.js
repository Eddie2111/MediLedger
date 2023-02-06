// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { CreateNewUser } from '../controllers/Auth';
export default function handler(req, res) {
    if (req.method === "GET"){
      res.status(200).json({ name: 'John Doe' })
    }
    if(req.method==="POST"){
      const data = req.body;
      if (data.password === data.confirmPassword){
        res.status(200);
        /*
        CreateNewUser(data)
        .then(()=>{res.status(200).json({message:"User Created"})})
        .catch((error)=>{res.status(400).json({message:error})})
        */
      }
    }
  }
  