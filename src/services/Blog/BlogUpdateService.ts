import IBlogDTO from "src/entities/Blog/IBlogDTO";
import Blog from "../../entities/BlogSchema";

export default class BlogUpdateService {
  public async update(_id: string, blog: IBlogDTO) {
    return await Blog.updateOne({ _id }, blog);
  }
}
