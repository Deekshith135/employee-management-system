package com.Deekshith.ems_backend.service.impl;

import com.Deekshith.ems_backend.exception.ResourceNotFoundException;
import com.Deekshith.ems_backend.model.Employee;
import com.Deekshith.ems_backend.repository.EmployeeRepository;
import com.Deekshith.ems_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Override
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Employee getEmployeeById(Long employeeId) {
        return employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + employeeId));
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee updateEmployee(Long employeeId, Employee updatedEmployeeDetails) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + employeeId));

        employee.setFirstName(updatedEmployeeDetails.getFirstName());
        employee.setLastName(updatedEmployeeDetails.getLastName());
        employee.setEmail(updatedEmployeeDetails.getEmail());
        employee.setDepartment(updatedEmployeeDetails.getDepartment());
        employee.setSalary(updatedEmployeeDetails.getSalary());

        return employeeRepository.save(employee);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + employeeId));

        employeeRepository.delete(employee);
    }
}