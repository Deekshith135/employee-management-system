import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/employees";

class EmployeeService {
    deleteEmployee(employeeId) {
        return axios.delete(API_BASE_URL + '/' + employeeId);
    }
    getAllEmployees() {
        return axios.get(API_BASE_URL);
    }

    createEmployee(employee) {
        return axios.post(API_BASE_URL, employee);
    }

    // Add this method to get a single employee by ID
    getEmployeeById(employeeId) {
        return axios.get(API_BASE_URL + '/' + employeeId);
    }

    // Add this method to update an employee
    updateEmployee(employeeId, employee) {
        return axios.put(API_BASE_URL + '/' + employeeId, employee);
    }
}

const employeeService = new EmployeeService();
export default employeeService;