import {City} from './city.interface';

export interface School {
    active: boolean;
    address: string;
    city?: City;
    city_id: number;
    deposit_price: number;
    name: string;
    price: number;
    _id: number;
}
