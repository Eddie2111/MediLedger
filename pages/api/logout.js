// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    if (req.method === "GET"){
        //res.setHeader('Set-Cookie', `token=abc; HttpOnly=True, Secure=True, Expires=1s, SameSite=Strict`);
        console.log(req.cookies);
      res.setHeader('Set-Cookie', `token=${null}; HttpOnly=True, Secure=True, Max-Age=0, SameSite=Strict`);
      res.status(200).json({ name: 'John Doe' })
    }
    if(req.method==="POST"){
      const data = req.body;
      console.log(req.cookies);
      res.setHeader('Set-Cookie', `token=${null}; HttpOnly=True, Secure=True, Max-Age=0, SameSite=Strict`);
      res.status(200.).json({data});
    }
  }
  