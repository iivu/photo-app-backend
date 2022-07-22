import { connection } from '../app/database/mysql';
import { PostModel } from './post.model';

/**
 * Get post list
 */
export const getPosts = async () => {
  const sql = `
    SELECT 
      post.id, post.title, post.content,
      JSON_OBJECT('id',user.id,'name',user.name) as user
    FROM post
    LEFT JOIN user
    ON post.userId = user.id;
  `;
  const [data] = await connection.promise().query(sql);
  return data;
};

/**
 * Create post
 */
export const creatPost = async (post: PostModel) => {
  const sql = `
    INSERT INTO post
    SET ?
  `;
  const [data] = await connection.promise().query(sql, post);
  return data;
};

/**
 * Update post
 */
export const updatePost = async (postId: number, post: PostModel) => {
  const sql = `
    UPDATE post SET ? WHERE id = ?
  `;
  const [data] = await connection.promise().query(sql, [post, postId]);
  return data;
};

/**
 * Delete post
 */
export const deletePost = async (postId: number) => {
  const sql = `DELETE FROM post WHERE id = ?`;
  const [data] = await connection.promise().query(sql, postId);
  return data;
};
