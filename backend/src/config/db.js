import { DB_NAME } from "../constants.js";
import pg from "pg"

const {Pool} = pg

const pool = new Pool({
  connectionString: `${process.env.DATABASE_URL}/${DB_NAME}`
});

pool.on("connect", () => {
  console.log("✅ PostgreSQL connection completed");
});

pool.on("error", (err) => {
  console.error("❌ PostgreSQL pool error:", err);
});

export default pool;

