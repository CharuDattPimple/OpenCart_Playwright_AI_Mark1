import mysql from 'mysql2/promise';
import { getRequiredEnv } from './environment';

export async function executeQuery(sql: string, params?: unknown[]) {
    const connection = await mysql.createConnection({
        host: getRequiredEnv('DB_HOST'),
        port: Number(getRequiredEnv('DB_PORT')),
        user: getRequiredEnv('DB_USER'),
        password: getRequiredEnv('DB_PASSWORD'),
        database: getRequiredEnv('DB_NAME'),
    });

    try {
        const [result] = await connection.execute(sql, params);
        return result;
    } finally {
        await connection.end();
    }
}