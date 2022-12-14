import jwt from 'jsonwebtoken';

import { PRIVATE_KEY } from '../app/app.config';
import { connection } from '../app/database/mysql';

interface SignTokenOptions {
  payload?: any;
}

export const signToken = (options: SignTokenOptions) => {
  const { payload } = options;
  const token = jwt.sign(payload, PRIVATE_KEY, { algorithm: 'RS256' });
  return token;
};

// 检查用户是否拥有指定的资源
interface PossessOptions {
  resourceId: number;
  resourceType: string;
  userId: number;
}

export const possess = async (options: PossessOptions) => {
  const { resourceId, resourceType, userId } = options;
  // 检查具体资源的id数量，如果查出来为0，则用户没有该资源的权限
  const sql = `
    SELECT COUNT(${resourceType}.id) as count
    FROM ${resourceType}
    WHERE ${resourceType}.id = ? AND userId = ?;
  `;
  const [data] = await connection.promise().query(sql, [resourceId, userId]);
  // @ts-ignore
  return data[0].count ? true : false;
};
