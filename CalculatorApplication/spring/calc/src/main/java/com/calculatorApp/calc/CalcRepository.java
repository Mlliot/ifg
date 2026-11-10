package com.calculatorApp.calc;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CalcRepository extends JpaRepository<Calculation, Long> {

}
