import { ProfileId, ContactId } from './ids';
export interface Offer {
    offerer: ProfileId;
    description: string;
    contactInformation: ContactId;
}