import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { id } = useParams(); // Get the ID from the URL

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, email };

        if (id) { // If ID exists, update employee
            EmployeeService.updateEmployee(id, employee).then((response) => {
                navigate('/employees');
            }).catch(error => {
                console.log(error);
            });
        } else { // Otherwise, create a new employee
            EmployeeService.createEmployee(employee).then((response) => {
                navigate('/employees');
            }).catch(error => {
                console.log(error);
            });
        }
    };

    useEffect(() => {
        if (id) { // If an ID is present, fetch the employee data
            EmployeeService.getEmployeeById(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.log(error);
            });
        }
    }, [id]); // Effect runs when 'id' changes

    const pageTitle = () => {
        return id ? <h2 className='text-center'>Update Employee</h2> : <h2 className='text-center'>Add Employee</h2>;
    };

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'> First Name :</label>
                                <input
                                    type='text'
                                    placeholder='Enter first name'
                                    name='firstName'
                                    className='form-control'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'> Last Name :</label>
                                <input
                                    type='text'
                                    placeholder='Enter last name'
                                    name='lastName'
                                    className='form-control'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'> Email Id :</label>
                                <input
                                    type='email'
                                    placeholder='Enter email'
                                    name='email'
                                    className='form-control'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeComponent;