import { ProfileId, ImageId, PostId } from './ids';

export interface Post {
    id: PostId;
    title: string;
    location: string;
    posterId: ProfileId;
    imageUrl: ImageId;
    description: string;
}