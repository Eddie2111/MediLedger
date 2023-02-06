const jwt = require('jsonwebtoken');
const { FindOneUser } = require('./controllers/Auth');
const {Test} = require('./controllers/Validity');
const { FindOneLedger, UpdateLedger } = require('./controllers/Chains');
const dateNow = ()=>{
    const data = new Date().toJSON().slice(0, 10) + " "
				+ new Date().toJSON().slice(11, 20);
    return data;
}
export default function handler(req, res) {
  if (req.method === "GET"){
    res.status(200).json({ name: 'John Doe' })
  }
  if(req.method==="POST"){
    const data = req.body;
    const cookie = req.cookies;
    const userData = jwt.verify(cookie.token,process.env.JWT_SECRET);
    console.log(userData.email);
    // find the user
    FindOneUser({email:userData.email})
    .then((user)=>{
        // update the ledger
        FindOneLedger({serialNo:data.serialNo})
        .then((ledger)=>{
            
            const ledgerData = jwt.verify(ledger.hash,process.env.JWT_SECRET);
            
            ledgerData.signs.push(user.userType);
            if(ledgerData.valid===false){
                console.log("p220002");
                res.json({message:"Ledger was Blocked"});
            }
            else if(!Test(ledgerData.signs)){
                const newLedger = {
                    id:ledgerData.id,
                    email:user.email,
                    valid: false,
                    signs: ledgerData.signs,
                    createdBy: ledgerData.createdBy,
                    creationDate:ledgerData.creationDate,
                    updatingDate:dateNow(),
                }
                const submit = {
                    serialNo:ledger.serialNo,
                    hash:jwt.sign(newLedger,process.env.JWT_SECRET),
                }
                UpdateLedger(submit)
                .then(()=>{
                    console.log("done from here, but blocked forever")
                    res.status(200).json({message:"Ledger Updated"});
                })
                .catch((error)=>{
                    console.log(error);
                    res.status(200).json({message:"Ledger Not Updated"});
                })
            }
            else{
                ledgerData.signs.push(user.userType);
                const newLedger = {
                    id:ledgerData.id,
                    email:user.email,
                    signs: ledgerData.signs,
                    creationDate:ledgerData.creationDate,
                    updatingDate:dateNow(),
                }
                
                const submit = {
                    serialNo:ledger.serialNo,
                    hash:jwt.sign(newLedger,process.env.JWT_SECRET),
                }
                UpdateLedger(submit)
                .then(()=>{
                    console.log("done from here")
                    res.status(200).json({message:"Ledger Updated"});
                })
                .catch((error)=>{
                    console.log(error);
                    res.status(200).json({message:"Ledger Not Updated"});
                })
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    .catch((error)=>{
        console.log(error);
        res.status(200).json({message:"User Not Found"});
    })
  }
}
