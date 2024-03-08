package uvt.form.project.controller;

import uvt.form.project.model.Student;
import uvt.form.project.service.StudentService;
import uvt.form.project.service.GenerareCerereBursa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/student")

public class StudentController {
    @Autowired
    private StudentService studentService;

    @Autowired
    private GenerareCerereBursa generareCerereBursa;

    @PostMapping("/add")
    @ResponseBody
    public Map<String, String> add(@RequestBody Student student) {
        studentService.saveStudent(student);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Student added successfully");

        generareCerereBursa.generareSiSalvareCerereDeBursa(student);

        return response;
    }

}
