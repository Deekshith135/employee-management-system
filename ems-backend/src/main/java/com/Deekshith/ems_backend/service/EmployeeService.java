package com.Deekshith.ems_backend.service;

import com.Deekshith.ems_backend.model.Employee;
import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);
    Employee getEmployeeById(Long employeeId);
    List<Employee> getAllEmployees();
    Employee updateEmployee(Long employeeId, Employee updatedEmployee);
    void deleteEmployee(Long employeeId);
}