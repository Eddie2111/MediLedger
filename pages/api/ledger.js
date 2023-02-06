const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { CreateLedger, FindSelectiveAll } = require('./controllers/Chains');
const dateNow = ()=>{
    const data = new Date().toJSON().slice(0, 10) + " "
				+ new Date().toJSON().slice(11, 20);
    return data;
}
export default function handler(req, res) {
    if (req.method === "GET"){
        const { email } = jwt.verify(req.cookies.token,process.env.JWT_SECRET);
        console.log(email);
        try{
            FindSelectiveAll({email:email})
            .then((data)=>{console.log(data)})
            .catch((err)=>{console.log(err)})
        }
        catch(err){
            console.log(err)
        }
        res.status(200).json({ name: 'John Doe' })
    }
    if(req.method==="POST"){
      const data = req.body;
      const {email} = jwt.verify(req.cookies.token,process.env.JWT_SECRET);
      console.log(req.body);
      const token = jwt.sign({
        id:crypto.randomUUID(),
        email:email,
        valid: true,
        createdBy: email,
        signs: ["MANUFACTURER",],
        creationDate:dateNow(),
        updatingDate:dateNow(),
    },process.env.JWT_SECRET);
      const dataSet  = {
        id: crypto.randomBytes(16).toString("hex"),
        name: data.name,
        email: email,
        creatorEmail: data.email,
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
  