const data = {
    name: "John Doe", licenseNo: "123456789",
    status:404, message: "Not Found"
}
export default function handler(req, res) {
    if (req.method === 'POST') {
      console.log(req.body);
        res.json(data)
    } else {
      res.json(data)
    }
  }