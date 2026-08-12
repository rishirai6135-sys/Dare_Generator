import mysql2 from "mysql2/promise";

export const db = await mysql2.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    database: process.env.SQL_DB,
    password: process.env.SQL_PASS
});

