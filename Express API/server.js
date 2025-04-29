import express from 'express'

const celebrity = {
  type: "action hero",
  name: "JSON Statham"
}

const app = express()

app.get('/', (req, res) => {
  res.json(celebrity)  
})

app.listen(8000, () => console.log('listening 8000'))

