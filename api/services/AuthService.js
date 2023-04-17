import User from '../models/User.js';

const registerUserService = async (body) => {
    try{
        const newUser = await User.create(body);
        return newUser;
    }catch(error){
        console.log(error);
    }
}

export { registerUserService }