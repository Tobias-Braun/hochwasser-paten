import { ProfileId, ImageId, PostId } from './ids';

export interface Post {
    id: PostId;
    title: string;
    location: string;
    poster: ProfileId;
    imageUrl: ImageId;
    description: string;
}