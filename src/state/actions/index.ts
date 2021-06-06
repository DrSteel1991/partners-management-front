import { ActionType } from '../action-types';

interface GetPartnersAction {
  type: ActionType.GET_PARTNERS;
}
interface GetPartnersSuccessAction {
  type: ActionType.GET_PARTNERS_SUCCESS;
  payload: Partner[];
}
interface GetPartnersErrorAction {
  type: ActionType.GET_PARTNERS_ERROR;
  payload: [];
}
export interface Partner {
  id: number;
  urlName: string;
  organization: string;
  customerLocations: string;
  willWorkRemotely: boolean;
  website: string | null;
  services: string;
  offices: Office[];
}

export interface Office {
  location: string;
  address: string;
  coordinates: string[];
  dist: number;
}

export interface IPartnerInfo {
  location: string;
  address: string;
  coordinates: string[];
  companyName: string;
  dist: number;
}

export type Action =
  | GetPartnersAction
  | GetPartnersSuccessAction
  | GetPartnersErrorAction;
