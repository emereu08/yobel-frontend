
import { Location } from "./location";

export interface Character {
    id:number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Location;
    location: Location;
    image: string;
    episode: [];
    url: string;
    created: Date;
}
