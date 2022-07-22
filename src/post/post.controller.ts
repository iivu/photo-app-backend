import _ from 'lodash';
import type { Request, Response, NextFunction } from 'express';

import { getPosts, creatPost, updatePost, deletePost } from './post.service';

/**
 * Post list
 */
export const index = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await getPosts();
    res.send(posts);
  } catch (e) {
    next(e);
  }
};

/**
 * Create post
 */
export const store = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, content } = req.body;
    const data = await creatPost({ title, content });
    res.status(200).send(data);
  } catch (e) {
    next(e);
  }
};

/**
 * Update post
 */
export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postId } = req.params;
    const post = _.pick(req.body, ['title', 'content']);
    const data = await updatePost(parseInt(postId, 10), post);
    res.status(200).send(data);
  } catch (e) {
    next(e);
  }
};

/**
 * Delete post
 */
 export const destroy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postId } = req.params;
    const data = await deletePost(parseInt(postId, 10));
    res.status(200).send(data);
  } catch (e) {
    next(e);
  }
};
