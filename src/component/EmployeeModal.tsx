import "../style/EmployeeModal.style.css"
import {IEmployee} from "../models/Employee.type";

type Props = {
    onClose: () => void
    data: IEmployee;
}

const EmployeeModal= (props:Props) => {
    const { onClose, data} = props;
    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Employee Details</h5>
            </div>
            <div className="modal-body">
                <div>
                    <label>Employee Id :  {data.employeeId}</label>
                </div>
                <div>
                    <label>Employee Name :  {data.employeeName}</label>
                </div>
                <div>
                    <label>Employee Location :  {data.location?.locationName}</label>
                </div>
                <div>
                    <label>Employee Salary :  {data.employeeSalary}</label>
                </div>
                <div>
                    <label>Employee Department :  {data.department?.departmentName}</label>
                </div>
            </div>
            <div className="modal-footer">
                <button onClick={ onClose } type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    )}

export default EmployeeModal;







