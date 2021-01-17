import { Request, Response, NextFunction } from "express";

import BlogAllService from "../services/Blog/BlogAllService";
import BlogFindService from "../services/Blog/BlogFindService";
import BlogAddService from "../services/Blog/BlogAddService";
import BlogDeleteService from "../services/Blog/BlogDeleteService";
import BlogUpdateService from "../services/Blog/BlogUpdateService";

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

  public async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const blogService = new BlogDeleteService();
      return res.send(await blogService.delete(req.params.id));
    } catch (error) {
      next(error);
    }
  }

  public async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const blogService = new BlogUpdateService();
      return res.send(await blogService.update(req.params.id, req.body));
    } catch (error) {
      next(error);
    }
  }
}
