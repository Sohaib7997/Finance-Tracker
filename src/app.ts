import express, { Application, Request, Response } from "express";
import cors from "cors";
import authRoutes from "../src/auth";


const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("🚀 Finance Tracker Backend is running!");
});


app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);


export default app;
