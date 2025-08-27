package com.Deekshith.ems_backend.repository;
import com.Deekshith.ems_backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // All CRUD database methods are inherited from JpaRepository
}