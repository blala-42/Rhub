package com.example.ghub.Controller;

import org.springframework.web.bind.annotation.*;

@RequestMapping("/")
@RestController
public class ExampleController {

    @GetMapping("/greeting")
    public Greeting getGreeting() {
        return new Greeting("Hello, World!");
    }

    @PostMapping("/greeting")
    public Greeting postGreeting(@RequestBody Greeting greeting) {
        return greeting;
    }
}


class Greeting {
    private String message;

    public Greeting() {
    }

    public Greeting(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
