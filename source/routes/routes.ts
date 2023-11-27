import express from 'express'
const router = express.Router()
import usersRouter, { route } from './users.routes'
import { playlistsRouter } from './playlists.routes'
import songsRouter from './songs.routes'
import authRoutes from './auth.routes'
import albumRoutes from './albums.routes'
import { artistsRouter } from './artists.routes'

router.get('/api', (req, res) => {
    res.send('Welcome')
})

router.use('/api/users', usersRouter)
router.use('/api/playlists', playlistsRouter)
router.use('/api/songs', songsRouter)
router.use('/api/auth', authRoutes) 
router.use('/api/album', albumRoutes)
router.use('/api/artists', artistsRouter)

export = router