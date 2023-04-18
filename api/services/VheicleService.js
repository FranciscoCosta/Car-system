import Vheicle from '../models/Vheicle.js';

const registerVheicleService = async (vheicle) => {
    console.log(vheicle,"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    try{
        const newVheicle = new Vheicle(vheicle);
        await newVheicle.save();
        return newVheicle;
    }catch(error){
        console.log(error)
    }
}


const getVheiclesService = async (id) => {
    console.log(id,"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    const vheicles = await Vheicle.find( { userId: id });
    return vheicles;
    }

export { registerVheicleService, getVheiclesService }