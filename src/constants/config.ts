import dotenv from "dotenv";
dotenv.config();

export const { URL } = process.env as Record<string, string>;
