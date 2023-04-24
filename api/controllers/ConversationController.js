import { getAllConversationsService, createConversationService, getConversationService } from "../services/ConversationService.js";

const getAllConversations = async (req, res) => {
    try {
        const conversation = await getAllConversationsService(req.params.id);
        res.status(200).json(conversation);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar conversas" });
    }
    }

const createConversation = async (req, res) => {
    try {
        const conversation = await createConversationService(req.body);
        res.status(200).json(conversation);
    } catch (error) {
        res.status(404).json({ message: "Erro ao criar conversa" });
    }
}

const getConversation =async (req, res) =>{
    try{
        const conversation = await getConversationService(req.params.id);
        if(conversation) return res.status(200).json({conversation})
        return res.status(404).json({ message: "Não conseguiu encontrar conversa"})
    }catch(error){
        return res.satatus(500).json({ message: "Erro do servidor"})
    }
}

export { getAllConversations, createConversation, getConversation };