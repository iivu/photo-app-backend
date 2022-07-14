import type { Request, Response, NextFunction } from 'express';

import { getPosts } from './post.service';

/**
 * Post list
 */
export const index = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization !== 'SECRET') {
    return next(new Error());
  }
  const posts = getPosts();
  res.send(posts);
};
