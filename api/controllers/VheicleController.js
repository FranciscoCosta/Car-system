import { registerVheicleService, getVheiclesService } from '../services/VheicleService.js'

const registerVheicle = async(req, res )=>{
    
    try{
        const vheicle = await registerVheicleService(req.body);
        if(!vheicle) return res.status(400).json({ message: "Erro ao cadastrar veículo" })
        return res.status(200).json({ vheicle })
    }catch(error){
        return res.status(500).json({ message: "Algum erro aconteceu" })
    }
}

const getVheicles = async(req, res )=>{
    const { id } = req.params;
    try{
        const vheicles = await getVheiclesService(id);
        return res.status(200).json({ vheicles })
    }catch(error){
        return res.status(500).json({ message: "Algum erro aconteceu" })
    }
}




export { registerVheicle, getVheicles }