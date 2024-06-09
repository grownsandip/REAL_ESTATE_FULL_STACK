import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/posts.route.js";
import authRoutes from "./routes/auth.route.js";
import testRoutes from "./routes/test.route.js";
import userRoutes from "./routes/user.route.js";
dotenv.config();
const app = express();
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.listen(3000, () => {
    console.log("app is running on port 3000");
});
console.log("env loaded");