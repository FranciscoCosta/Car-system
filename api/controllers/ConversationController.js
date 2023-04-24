import { getAllConversationsService, createConversationService } from "../services/ConversationService.js";

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

export { getAllConversations, createConversation };