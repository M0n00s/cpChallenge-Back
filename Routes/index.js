const { Router } = require('express')
const router = Router()

router.use('/iecho', require('./IechoRoute'))

module.exports = router
