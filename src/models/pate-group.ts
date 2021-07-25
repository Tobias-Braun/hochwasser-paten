import { PateGroupId, ProfileId, OfferId } from './ids';
import { Offer } from './offer';

export interface PateGroup {
    id: PateGroupId;
    helpee: ProfileId;
    pates: ProfileId[];
    offers: OfferId[];
}