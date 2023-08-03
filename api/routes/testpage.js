const { Router } = require('express')

const router = Router()

const testpage = [
    { name: 'id' },
]
router.get('/testpage', function (req, res, next) {
    res.json(testpage)
})
router.get('/testpage/:id', function (req, res, next) {
    let obj = {
        id: String(req.params.id),
        HelloText: 'Соединение с сервером успешно установлено. Введенный параметр:'
    }
    res.send( obj )
})

module.exports = router
