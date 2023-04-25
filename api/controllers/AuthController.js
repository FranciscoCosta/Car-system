import { registerUserService, loginUserService } from '../services/AuthService.js';
import  {createToken}  from '../utils/JWTtoken.js';
const registerUser = async (req, res) => {
    try{
        const newUser = registerUserService(req.body);
        if(!newUser) return res.satatus(404).json({message: "Não foi possível criar o usuário"});
        res.status(201).json({message: "Usuário criado com sucesso"});
    }catch(error){
        return res.status(500).json({message: "Erro ao criar o usuário"});
    }
}

const loginUser = async (req, res) => {
    try {
        const user = await loginUserService(req, res);
        if (user) {
          const token = await createToken(user);
          const { password, ...info } = user._doc;
          return res.status(200).json({ ...info, token });
        }
        return res.status(404).json({ message: "Usuário não encontrado" });
        } catch (error) {
        return res.status(500).json({ message: "Erro ao fazer login" });
    }
}




export { registerUser, loginUser }