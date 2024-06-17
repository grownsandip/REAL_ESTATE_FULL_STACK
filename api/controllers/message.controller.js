import prisma from "../lib/prisma.js"
export const addMessage = async (req, res) => {
    const tokenUserId = req.userId;
    console.log(tokenUserId);
    const chatId = req.params.chatId;
    console.log(chatId);
    const text = req.body.text;
    console.log(text);
    try {
        const chat = await prisma.chat.findUnique({
            where: {
                id: chatId,
                userIDs: {
                    hasSome: [tokenUserId]
                },
            },
        });
        if (!chat) return res.status(404).json({ message: "chat not found" });
        const message = await prisma.message.create({
            data: {
                chatId,
                text,
                userId: tokenUserId
            },
        });
        await prisma.chat.update({
            where: {
                id: chatId
            },
            data: {
                seenBy: [tokenUserId],
                lastMessage:text
            },
        });
        res.status(200).json(message);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to add messages!" });
    }
};