import dotenv from "dotenv";
import { app } from "./app.js";
import pool from "./config/db.js";

dotenv.config();

const PORT = Number(process.env.PORT || 8080);

const startServer = async () => {
  try {
    await pool.query("SELECT NOW()");
  } catch (error) {
    console.warn("⚠️ PostgreSQL not available yet. Starting server without DB check.");
    console.warn(error.message);
  }

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();