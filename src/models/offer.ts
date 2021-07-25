import { ProfileId, ContactId, OfferId } from './ids';
export interface Offer {
    id: OfferId;
    offerer: ProfileId;
    description: string;
    contactInformation: ContactId;
}