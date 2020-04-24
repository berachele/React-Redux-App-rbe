

const fetch = require('node-fetch')

module.exports =  async (req, res) => {
  const input = req.query.i
  let response = await fetch(`http://recipepuppy.com/api/?i=${input}`)
  let json = await response.json()
  res.json(json)
}
