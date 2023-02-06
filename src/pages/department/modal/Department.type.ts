import {ILocation} from "../../location/modal/ILocation";

export interface IDepartment {
    departmentId?: number;
    departmentName?: string;
    parentLocation?: ILocation;
}