package uvt.form.project.service;

import org.springframework.stereotype.Service;
import uvt.form.project.model.Student;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

@Service
public class GenerareCerereBursa {

    public void generareSiSalvareCerereDeBursa(Student student) {
        String cerereDeBursaTemplate =
                "Cerere de Bursă\n\n" +
                        "Subsemnatul(a), " + student.getNume() + " " + student.getPrenume() + ",\n" +
                        "Student(ă) la: " + student.getFacultate() + ",\n" +
                        "Specializarea: " + student.getSpecializare() + ",\n" +
                        "Anul de studiu: " + student.getAnulDeStudiu() + ",\n" +
                        "Număr matricol: " + student.getNumarMatricol() + ",\n" +
                        "Telefon de contact: " + student.getTelefon() + ",\n\n" +
                        "Declar pe propria răspundere că solicit o bursă socială pe criteriul: \n" +
                        student.getCriteriuBursa() + ".\n\n" +
                        "Data: _________\n" +
                        "Semnătura: _________\n";


        String numeFisier = "cerere_de_bursa.txt";
        String caleFisier = System.getProperty("user.dir") + "/" + numeFisier;

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(caleFisier))) {
            writer.write(cerereDeBursaTemplate);
            System.out.println("Șablonul a fost salvat cu succes în fișierul: " + caleFisier);
        } catch (IOException e) {
            e.printStackTrace();
            System.err.println("Eroare la salvarea șablonului în fișier.");
        }
    }
}
