import { registerVheicleService, getVheiclesService, deleteVheiclesService  } from '../services/VheicleService.js'

const registerVheicle = async(req, res )=>{
    
    try{
        const vheicle = await registerVheicleService(req.body);
        if(!vheicle) return res.status(400).json({ message: "Erro ao cadastrar veículo" })
        return res.status(200).json({ message: "Veículo cadastrado com sucesso" })
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

const deleteVheicle = async (req,res) =>{
    const { id } = req.params;
    try{
        const vheicles = await deleteVheiclesService(id);
        if(!vheicles) return res.status(404).json({ message: "Erro ao deletar veículo" })
        return res.status(200).json({ message: "Veiculo deletado com sucesso" })
    }catch(error){
        return res.status(500).json({ message: "Algum erro aconteceu" })
    }

}




export { registerVheicle, getVheicles, deleteVheicle }