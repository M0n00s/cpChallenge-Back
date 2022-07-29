// route --> /iecho

const { Router } = require('express')
const { invertText } = require('../Controllers/IechoController')
const router = Router()

// deberia validar el typeof de "text" para no pasar numeros.
// no se si pueda usar express validator

router.get('/', (req, res) => {
  const { text } = req.query
  if (text) {
    const iText = invertText(text)
    return res.status(200).json(iText)
  }

  res.status(400).json({
    error: 'no text'
  })
})

module.exports = router
