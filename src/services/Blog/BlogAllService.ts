import Blog from '../../entities/BlogSchema'

export default class BlogAllService{
    public async all(){
        return await Blog.find()
    }
}