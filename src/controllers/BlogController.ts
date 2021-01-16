import { Request, Response, NextFunction } from "express";

import BlogAllService from "../services/Blog/BlogAllService";
import BlogFindService from "../services/Blog/BlogFindService";
import BlogAddService from "../services/Blog/BlogAddService";

export default class BlogController {
  public async all(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const blogService = new BlogAllService();
      return res.send(await blogService.all());
    } catch (error) {
      next(error);
    }
  }

  public async findBlog(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const blogService = new BlogFindService();
      return res.send(await blogService.findBlogByID(req.params.id));
    } catch (error) {
      next(error);
    }
  }

  public async add(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const blogService = new BlogAddService();
      return res.send(await blogService.add(req.body));
    } catch (error) {
      next(error);
    }
  }
}
