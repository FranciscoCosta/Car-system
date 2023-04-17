import User from '../models/User.js';
import bcrypt from 'bcrypt';

const registerUserService = async (body) => {
    try{
        const { password } = body;
        const hash = await bcrypt.hash(password, 10);
        const newUser = new User({...body, password: hash});
        await newUser.save();
        return newUser;
    }catch(error){
        return error;
    }
}

const loginUserService = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(404).json({ message: "Usuário não encontrado!" });
        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect)
          return res.status(404).json({ message: "Usuário ou email errado!" });
        const { password, ...others } = user;
        return others;
      } catch (error) {
        return error;
      }
}

export { registerUserService, loginUserService }