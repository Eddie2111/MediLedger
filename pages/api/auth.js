const jwt = require('jsonwebtoken');
import { FindOneUser } from './controllers/Auth';
export default function handler(req, res) {
    if (req.method === "GET"){
        try{
            const check = jwt.verify(req.cookies.token,process.env.JWT_SECRET);
            const checkID = {id: check.id,email:check.email}
            console.log(checkID);
            FindOneUser(checkID)
            .then((data)=>{
                res.status(200).json({ dataset:{
                    name:data.name,
                    userType:data.userType,
                },route:null })
            })
            .catch((error)=>{
                res.status(200).json({ name: 'John Doe',route:"/500" })
            })

        }
        catch(e){
            res.status(200).json({ name: 'John Doe',route:"/" })
        }
    }
    if(req.method==="POST"){
      const data = req.body;
      console.log(req.body);
      res.status(200).json({data});
    }
  }
  