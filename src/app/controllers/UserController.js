import User from './app/models/User'
import { v4 } from 'uuid'

class UserController {
    async store(req, res) {
        const { name, email, password_hash, admin } = req.body;
        const user = await User.create({
            id: v4(),
            name,
            email,
            password_hash,
            admin,
        })
        return res.status(201).json(user)

    }
}

export default new UserController();