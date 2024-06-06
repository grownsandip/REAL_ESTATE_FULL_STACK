import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "Username, email, and password are required." });
    }
    try {

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            },
        });
        //console.log(newUser);
        res.status(201).json({ message: "User created successfully" })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to create user." })
    }
};
export const login = async (req, res) => {
    const { username, password } = req.body; 111
    try {//check if user exists
        const user = await prisma.user.findUnique({
            where: { username: username }
        })
        if (!user) {
            return res.status(401).json({ message: "Invalid Credantials" });
        }
        //check for password match
        const isPassValid = await bcrypt.compare(password, user.password);
        if (!isPassValid) return res.status(401).json({ message: "Invalid Credantials" });
        //send user a cookie token
        const age = 1000 * 60 * 60 * 24 * 7
        const token = jwt.sign({
            id: user.id,
            isAdmin: true
        }, process.env.JWT_SECRET_KEY, { expiresIn: age });
        const { password: userPassword, ...userInfo } = user;

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: age,
        }).status(200).json(userInfo);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Failed to login" })
    }
};
export const logout = (req, res) => {
    //db operations.
    res.clearCookie("token").status(200).json({ message: "Logged out sucessfully" })
}