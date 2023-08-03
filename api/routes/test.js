const { Router } = require('express')

const router = Router()

// Test route
router.use('/test', (req, res) => {
  res.end('Для проверки задания перейдите на страницу <<testpage>>')
})

module.exports = router
