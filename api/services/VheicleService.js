import Vheicle from '../models/Vheicle.js';

const registerVheicleService = async (vheicle) => {
    try{
        const newVheicle = new Vheicle(vheicle);
        await newVheicle.save();
        return newVheicle;
    }catch(error){
    }
}

const getVheiclesService = async (id) => {
    const vheicles = await Vheicle.find( { userId: id });
    return vheicles;
    }

const deleteVheiclesService = async(id)=>{
    const vheicle = await Vheicle.findByIdAndDelete(id);
    return vheicle;
}
export { registerVheicleService, getVheiclesService , deleteVheiclesService}