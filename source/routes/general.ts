import express from 'express'
const router = express.Router()
import usersRouter, { route } from './users'
import { playlistsRouter } from './playlists'

router.get('/api', (req, res) => {
    res.send('Welcome')
})

router.use('/api/users', usersRouter)
router.use('/api/playlists', playlistsRouter)

export = router