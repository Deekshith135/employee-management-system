import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const EmployeeListComponent = () => {

    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, []);

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    //... other code

   const deleteEmployee = (employeeId) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
        EmployeeService.deleteEmployee(employeeId).then((response) => {
            // This is the line that updates the UI.
            // If it's missing or has a typo, the list won't change.
            setEmployees(employees.filter(employee => employee.id !== employeeId));
        }).catch(error => {
            console.log(error);
        });
    }
}

//... rest of the component
   

    // ... addNewEmployee function ...

    return (
        <div className='container'>
            <h2 className='text-center'>List Employees</h2>
            <button className='btn btn-primary mb-2' onClick={() => navigate('/add-employee')}>Add Employee</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <button className='btn btn-info' onClick={() => navigate(`/edit-employee/${employee.id}`)}>Update</button>
                                        {/* Update this button's onClick */}
                                        <button className='btn btn-danger' style={{ marginLeft: "10px" }} onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeListComponent;