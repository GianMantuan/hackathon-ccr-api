import Blog from "../../entities/BlogSchema";

export default class BlogDeleteService {
  public async delete(_id: string) {
    return await Blog.deleteOne({_id});
  }
}
