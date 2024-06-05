import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/posts.route.js";
import authRoutes from "./routes/auth.route.js";
const app = express();
app.use(cors({origin:'http://localhost:5173',credentials:true}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.listen(8800, () => {
    console.log("app is running");
});