package com.calculatorApp.calc;

import org.hibernate.annotations.Generated;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Calculation {

    @Id
    @GeneratedValue
    private long id;
    @Column
    private String calculation;

    public Calculation(long id, String calc) {
        this.id = id;
        this.calculation = calc;
    }

    public Calculation(String calc){
        this.calculation = calc;
    }

    public Calculation(){
        // this.id = 0;
    }

    @Override
    public String toString() {
        return "Calculation [id=" + id + ", calc=" + calculation + "]";
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getCalc() {
        return calculation;
    }
    public void setCalc(String buffer) {
        this.calculation = buffer;
    }

    
}
