import Conversation from '../models/Conversation.js';
import User from '../models/User.js';

const getAllConversationsService = async (id) => {
    try {
        const conversation = await Conversation.find({ $or: [{ clientId: id }, { mechanicId: id }] });
        return conversation;
    } catch (error) {
        throw error;
    }
}

const createConversationService = async (conversation) => {
    ;
    try {
        const mechanicName =  await User.findById(conversation.mechanicId);
        const clientName =  await User.findById(conversation.clientId);
        const id = conversation.mechanicId + conversation.clientId;
        const newConversation = new Conversation({ id, clientId : conversation.clientId, mechanicId :conversation.mechanicId , lastMessage: "", mechanicName: mechanicName.username, clientName: clientName.username});
        await newConversation.save();
        return newConversation;
    } catch (error) {
        throw error;
    }
}

const getConversationService = async(id)=>{
    try {
        const conversation = await Conversation.findOne({ id: id });
        return conversation;
    } catch (error) {
        throw error;
    }
}

export { getAllConversationsService, createConversationService, getConversationService };