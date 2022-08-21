package com.pulkit.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class ApplicationController {

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello From Spring React App";
    }
}
