import { Photo } from "./Photo";

export interface Member {
  id: number;
  userName: string;
  photoUrl: string;
  age: number;
  knownAs: string;
  created: string;
  lastActive: string;
  gender: string;
  introduction: string;
  lookingFor: string;
  interest?: any;
  city: string;
  country: string;
  photos: Photo[];
}
