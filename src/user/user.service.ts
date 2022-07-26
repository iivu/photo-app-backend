import { connection } from '../app/database/mysql';
import { UserModel } from './user.model';

/**
 * Create user
 */

export const createUser = async (user: UserModel) => {
  const sql = `
        INSERT INTO user
        SET ?
    `;
  const [data] = await connection.promise().query(sql, user);
  return data;
};

export const getUserByName = async (name: string) => {
  const sql = `
    SELECT id,name 
    FROM user
    WHERE name = ?
  `;
  const [data] = await connection.promise().query(sql, name);
  // @ts-ignore
  return data[0];
};
