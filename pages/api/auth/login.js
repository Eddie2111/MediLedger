


export default function handler(req, res) {
    if (req.method === 'POST') {
        
      console.log(req.body);
        res.json({status:200,message:"OK"})
    } else {
      res.json({status:400,message:"Bad Request"})
    }
  }