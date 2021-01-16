import Blog from '../../entities/BlogSchema'
import IBlogDTO from 'src/entities/Blog/IBlogDTO'

export default class BlogAddService {
  public async add(blog: IBlogDTO) {
    return await Blog.create(blog)
  }
}