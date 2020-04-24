

const fetch = require('node-fetch')

module.exports =  async (req, res) => {
  let response = await fetch('http://ricepuppy.com/api/blah')
  let json = await response.json()
  res.json(json)
}
