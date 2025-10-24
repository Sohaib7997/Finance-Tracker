import express, { Application, Request, Response } from "express";
import cors from "cors";
import authRoutes from "../src/auth";
import pool from "./db";


const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/user", async (req: Request, res: Response) => {
  const email = (req.query.email || "").toString(); 

  if (!email) {
    return res.status(400).json({ message: "Missing email" });
  }

  try {
    const userResult = await pool.query("SELECT id, username, email FROM users WHERE email = $1", [email]);
    const user = userResult.rows[0];

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);


export default app;
