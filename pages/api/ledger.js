const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { CreateLedger } = require('./controllers/Chains');
const dateNow = ()=>{
    const data = new Date().toJSON().slice(0, 10) + " "
				+ new Date().toJSON().slice(11, 20);
    return data;
}
export default function handler(req, res) {
    if (req.method === "GET"){
        console.log(req.body);
        res.status(200).json({ name: 'John Doe' })
    }
    if(req.method==="POST"){
      const data = req.body;
      console.log(req.body);
      const token = jwt.sign({
        id:crypto.randomUUID(),
        email:data.email,
        valid: true,
        createdBy: data.email,
        signs: ["MANUFACTURER",],
        creationDate:dateNow(),
        updatingDate:dateNow(),
    },process.env.JWT_SECRET);
      const dataSet  = {
        id: crypto.randomBytes(16).toString("hex"),
        name: data.name,
        serialNo: data.serialNo,
        hash: token,
      }
     try{
        CreateLedger(dataSet)
            .then(()=>{
                res.status(200).json({
                    message:"Ledger Created",
                    status:200
                });
            })
            .catch((error)=>{
                if(error.code === "P2002"){
                    res.status(200).json({message:"ledger exists"});
                }
                else{
                    res.status(200).json({message:error.message});
                }
            })
        }
        catch(error){
            console.log(error)
            res.status(302) 
        }
    }
  }
  