import FindOneUser from "../auth/auth";


export default function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        console.log(data);
        FindOneUser(data)
        .then((data)=>{
            console.log("ok");
            res.status(200).json({message:"User Found"})
        })
        .catch((err)=>{
            console.log(err)
            res.status(200);
        })
        //res.json({status:200,message:"OK"})
    } else {
      res.json({status:400,message:"Bad Request"})
    }
  }