import { registerUserService } from '../services/AuthService.js';

const registerUser = async (req, res) => {
    try{
        const newUser = registerUserService(req.body);
        if(!newUser) return res.satatus(404).json({message: "Não foi possível criar o usuário"});
        res.status(201).json({message: "Usuário criado com sucesso"});
    }catch(error){
        console.log(error);
    }
}


export { registerUser }