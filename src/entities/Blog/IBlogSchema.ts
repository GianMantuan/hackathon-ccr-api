import { Model } from 'mongoose';
import IBlogDTO from './IBlogDTO'

export default interface IBlogSchema extends Model<IBlogDTO> {
  all(): Promise<IBlogDTO>
  add(post: IBlogDTO): Promise<IBlogDTO>
}