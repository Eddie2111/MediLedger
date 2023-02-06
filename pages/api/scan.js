import { FindOneLedger } from './controllers/Chains.js';

export default function handler(req, res) {
  if (req.method === "GET"){
    res.status(200).json({ name: 'John Doe' })
  }
  if(req.method==="POST"){
    const data = req.body;
    try{
    FindOneLedger(data)
        .then((data)=>{
            console.log(data);
            res.status(200).json(data);
            })
        .catch((error)=>{
            console.log(error);
            res.status(200).json({message:"Not Found"});
        })
    }
    catch(error){
        console.log(error)
        res.status(302) 
    }
  }
}
