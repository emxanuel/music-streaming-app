import express from 'express'
import { 
    createUser, 
    deleteUser, 
    getAllUsers,
    getSingleUser,
    updateUser
} from '../middlewares/users.middlewares'
const usersRouter = express.Router()

usersRouter.get('/', getAllUsers)
usersRouter.post('/', createUser)
usersRouter.get('/find', getSingleUser)
usersRouter.put('/:id', updateUser)
usersRouter.delete('/:id', deleteUser)

export = usersRouter