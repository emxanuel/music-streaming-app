import express from 'express'
const router = express.Router()
import usersRouter from './users'

router.get('/api', (req, res) => {
    res.send('Welcome')
})

router.use('/api/users', usersRouter)

export = router