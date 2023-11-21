import express from 'express'
const router = express.Router()
import usersRouter from './users.routes'
import { playlistsRouter } from './playlists.routes'
import songsRouter from './songs.routes'
import authRoutes from './auth.routes'
import albumRoutes from './albums.routes'

router.get('/api', (req, res) => {
    res.send('Welcome')
})

router.use('/api/users', usersRouter)
router.use('/api/playlists', playlistsRouter)
router.use('/api/songs', songsRouter)
router.use('/api/auth', authRoutes)
router.use('/api/album', albumRoutes)

export = router