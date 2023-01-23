import {IDepartment} from "./Department.type";
import {ILocation} from "./ILocation";

export interface IEmployee {
    employeeId?: number | string;
    employeeName?: string;
    location?: ILocation;
    dateOfJoining?: Date;
    employeeSalary?: string;
    department?: IDepartment;
}

export enum pageEnum {
    list,
    add,
    edit,
}



