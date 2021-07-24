import { ProfileId, ImageId, PostId } from './ids';

export interface Post {
    id: PostId;
    title: string;
    location: string;
    poster: ProfileId;
    image: ImageId;
    description: string;
}