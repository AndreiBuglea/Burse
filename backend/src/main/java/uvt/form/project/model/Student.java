package uvt.form.project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nume;
    private String prenume;
    private String telefon;
    private String criteriuBursa;
    private String facultate;
    private String specializare;
    private int anulDeStudiu;
    private String numarMatricol;

    public Student() {
    }

    public Student(int id, String nume, String prenume, String telefon, String criteriuBursa, String facultate, String specializare, int anulDeStudiu, String numarMatricol) {
        this.id = id;
        this.nume = nume;
        this.prenume = prenume;
        this.telefon = telefon;
        this.criteriuBursa = criteriuBursa;
        this.facultate = facultate;
        this.specializare = specializare;
        this.anulDeStudiu = anulDeStudiu;
        this.numarMatricol = numarMatricol;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public String getPrenume() {
        return prenume;
    }

    public void setPrenume(String prenume) {
        this.prenume = prenume;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public String getCriteriuBursa() {
        return criteriuBursa;
    }

    public void setCriteriuBursa(String criteriuBursa) {
        this.criteriuBursa = criteriuBursa;
    }

    public String getFacultate() {
        return facultate;
    }

    public void setFacultate(String facultate) {
        this.facultate = facultate;
    }

    public String getSpecializare() {
        return specializare;
    }

    public void setSpecializare(String specializare) {
        this.specializare = specializare;
    }

    public int getAnulDeStudiu() {
        return anulDeStudiu;
    }

    public void setAnulDeStudiu(int anulDeStudiu) {
        this.anulDeStudiu = anulDeStudiu;
    }

    public String getNumarMatricol() {
        return numarMatricol;
    }

    public void setNumarMatricol(String numarMatricol) {
        this.numarMatricol = numarMatricol;
    }
}