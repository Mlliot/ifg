package com.calculatorApp.calc;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class CalcController {

    @Autowired
    private CalcRepository calcRepository;

    // @CrossOrigin(origins = "http://localhost:4200/")
    @GetMapping("/calculations")
    public List<Calculation> getCalculations() {
        List<Calculation> list = List.of(new Calculation(1,"1+1"));
        return list;
    }

    @GetMapping("/calculation")
    public Calculation getCalculation(){
        return new Calculation(2, "2+2");
    }

    @GetMapping("/getCalc")
    public void getCalc(long id){
        calcRepository.findById(id);
    }

    @GetMapping("/getRecentCalc")
    public Calculation getRecentCalc(){
        List<Calculation> calcs = calcRepository.findAll();
        Calculation calc = calcs.get(calcs.size()-1);
        return calcRepository.findById(calc.getId()).get();
    }

    @PostMapping("/postCalc")
    public void postCalc(@RequestBody String calc){
        System.out.printf("Calculation from postCalc: %s\n",calc);
        calcRepository.save(new Calculation(calc));
    }

    @DeleteMapping("/popCalc")
    public Calculation popCalc(){
        Calculation calc = getRecentCalc();
        calcRepository.deleteById(calc.getId());
        return calc;
    }

    @DeleteMapping("/deleteAllCalc")
    public void deleteAllCalc(){
        calcRepository.deleteAll();
    }

}
