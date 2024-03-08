package uvt.form.project.controller;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
@CrossOrigin
@RequestMapping("/student")

@RestController
public class FileDownloadController {

    @GetMapping("/downloadCerereDeBursa")
    public ResponseEntity<Resource> downloadCerereDeBursa() throws MalformedURLException {
        Path filePath = Paths.get("C:\\My Files\\Facultate\\Programare Java\\Proiect\\backend\\cerere_de_bursa.txt");
        Resource resource = new UrlResource(filePath.toUri());

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }
}
