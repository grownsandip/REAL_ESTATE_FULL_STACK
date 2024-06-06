import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/posts.route.js";
import authRoutes from "./routes/auth.route.js";
import testRoutes from "./routes/test.route.js"
dotenv.config();
const app = express();
app.use(cors({origin:process.env.CLIENT_URL}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.listen(3000, () => {
    console.log("app is running on port 3000");
});
console.log("env loaded");