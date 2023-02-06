import {ILocation} from "../../location/modal/ILocation";
import {IDepartment} from "../../department/modal/Department.type";


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



