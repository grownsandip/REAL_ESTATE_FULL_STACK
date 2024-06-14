import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get Users!" });
    }
};
export const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id: id },
        });
        res.status(200).json(user);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get User!" });
    }
};
export const updateUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    const { password, avatar, ...inputs } = req.body;
    if (!id == tokenUserId) return res.status(403).json({ message: "User is not authorized" });
    let updatedPassword = null;
    try {
        if (password) {
            updatedPassword = await bcrypt.hash(password, 10);

        }

        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                ...inputs,
                ...(updatedPassword && { password: updatedPassword }),
                ...(avatar && { avatar }),
            },
        });
        const { password: userPassword, ...rest } = updatedUser
        res.status(200).json(rest);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to update User!" });
    }
};
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    if (!id == tokenUserId) return res.status(403).json({ message: "User is not authorized" });
    try {
        await prisma.user.delete({
            where: { id: id },
        });
        res.status(200).json({ message: "User deleted" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to delete users!" });
    }
};
export const savePost = async (req, res) => {
    const postId = req.body.postId;
    const tokenUserId = req.userId;
    try {
        const savedPost = await prisma.savedPost.findUnique({
            where: {
                userId_postId: {
                    userId: tokenUserId,
                    postId,
                },
            },
        });
        if (savedPost) {
            await prisma.savedPost.delete({
                where: {
                    id: savedPost.id,
                },
            });
            res.status(200).json({ message: "saved post removed" });
        }
        else {
            await prisma.savedPost.create({
                data: {
                    userId: tokenUserId,
                    postId,
                },
            });
            res.status(200).json({ message: "post saved in the list" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to delete users!" });
    }
};
export const profilePosts = async (req, res) => {
    const tokenUserId = req.params.userId;
    try {
        const userPosts = await prisma.post.findUnique({
            where: { userId: tokenUserId },
        });
        const saved = await prisma.savedPost.findUnique({
            where: { userId: tokenUserId },
            include: {
                post: true,
            },
        });
        const savedPosts = post.map(item => item.post)
        res.status(200).json(userPosts,savedPosts);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get profile info!" });
    }
};