import Blog from '../../entities/BlogSchema'

export default class BlogFindService{
    public async findBlogByID(id: string){
        return await Blog.findById(id)
    }
}