package com.calculatorApp.calc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CalcCommandLineRunner implements CommandLineRunner{

    @Autowired
    private CalcRepository repository;

    @Autowired
    private CalcController controller;

    @Override
    public void run(String... args) throws Exception {

        controller.postCalc("1+3");
        controller.postCalc("2+3");
        controller.postCalc("3+3");

        System.out.printf("Recent %s\n", controller.getRecentCalc().toString());
        System.out.printf("Deleted %s\n", controller.popCalc().toString());
        System.out.printf("Recent %s\n", controller.getRecentCalc().toString());

        // System.out.println(repository.findAll());

    }

}
