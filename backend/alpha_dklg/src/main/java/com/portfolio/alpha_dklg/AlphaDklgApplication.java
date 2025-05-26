package com.portfolio.alpha_dklg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.portfolio.alpha_dklg")
public class AlphaDklgApplication {

	public static void main(String[] args) {
		SpringApplication.run(AlphaDklgApplication.class, args);
	}

}
