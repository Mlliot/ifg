package com.calculatorApp.calc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CalcApplication {

	public static void main(String[] args) {
		var context = SpringApplication.run(CalcApplication.class, args);
		// System.out.println("Hello");

		// context.getBean(CalcCommandLineRunner.class).run(Test);
	}

}
