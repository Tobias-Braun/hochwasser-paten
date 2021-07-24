import { ProfileId, ImageId, ContactId } from './ids';
export interface Profile {
    id: ProfileId;
    sirname: string;
    surname: string;
    profileImage: ImageId;
    description: string;
    contactId: ContactId;
}