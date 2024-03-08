[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Fk_hR3rN)

# Cerere Universitate
### Autor:  Buglea Andrei , Lazea Horatiu

## Descriere
Aplicația dezvoltată este un instrument destinat studenților pentru facilitarea creării de cereri personalizate. Utilizatorii completează informații precum detaliile personale, destinatarul, motivul solicitării, data, printre altele. Aceste date sunt utilizate de aplicație pentru a genera automat o cerere conform unui șablon predefinit. Un element cheie al aplicației este capacitatea de a păstra informațiile introduse pentru utilizări viitoare. Gestionarea datelor se face printr-un sistem eficient de fișiere, permițând importul și salvarea acestora, și utilizând structuri de date adecvate pentru organizare.

## Obiective
- **Automatizarea Generării Cererilor**: Accesul și personalizarea ușoară a șabloanelor prin comenzi simplificate și scripturi de completare automată.
- **Gestionarea Eficientă a Datelor**: Capacitatea de a salva și încărca date personale printr-un sistem de fișiere, incluzând criptarea datelor sensibile.
- **Export și Import de Date Simplificat**: Exportul cererilor în diferite formate și importul datelor din fișiere externe printr-o comandă directă.
- **Personalizare și Configurare Ușoară**: Configurarea șabloanelor și preferințelor aplicației prin fișiere de configurare.
- **Testare și Validare**: Teste automate pentru a valida funcționalitățile CLI și acuratețea generării documentelor.


## Arhitectura

### Backend (Spring Boot)
- **controller**
  - `FileDownloadController`: Gestionează descărcarea fișierelor.
  - `StudentController`: Administrează cererile pentru entitatea `Student`.

- **model**
  - `Student`: Un o clasa Java care definește structura de date pentru entitățile student.

- **repository**
  - `StudentRepository`: Interfață pentru Spring Data JPA, care facilitează operațiuni CRUD pe entitățile Student.

- **service**
  - `GenerareCerereBursa`: Conține logica pentru generarea cererilor de bursă.
  - `StudentService`: Interfața de service care definește metode pentru operațiuni legate de student.
  - `StudentServiceImplementation`: Implementarea concretă a `StudentService`.
  - `ProjectApplication`: Clasa principală care rulează aplicația Spring Boot.

### Frontend (React)

Interfața utilizator este construită folosind React, o bibliotecă JavaScript pentru construirea interfețelor de utilizator.
Interfața utilizatorilor cuprinde formulare pentru introducerea și gestionarea datelor studentului, precum și butoane sau alte elemente pentru generarea și descărcarea cererilor de bursă.
React este folosit pentru a crea o experiență dinamică și interactivă, cu componente reutilizabile și gestionarea stării în aplicația client.
Comunicarea între frontend și backend se realizează prin API-uri RESTful, unde frontend-ul trimite cereri la endpoint-urile expuse de backend pentru a procesa și a recupera date.
Această structură modulară favorizează separarea preocupărilor, unde backend-ul se concentrează pe logica de afaceri și manipularea datelor, în timp ce frontend-ul se ocupă de interacțiunea cu utilizatorul.


## Functionalități

### Creare Automată a Cererilor:

Aplicația permite studenților să genereze automat cereri, precum scutiri de taxe universitare, folosind șabloane predefinite. Utilizatorii completează datele personale și motivele solicitării, iar aplicația formatează și produce documentul necesar.

### Salvare și Încărcare Profiluri:

Utilizatorii pot salva profilurile personale și istoricul cererilor. Aceasta permite o regenerare rapidă și eficientă a documentelor pentru cereri subsecvente, fără a reintroduce toate datele de fiecare dată.

### Editare și Personalizare Șablon:

Aplicația oferă flexibilitate în personalizarea șabloanelor de cerere. Utilizatorii pot edita șabloanele pentru a include elemente specifice, cum ar fi siglele organizațiilor, și pot modifica formatul textului pentru a se potrivi cu necesitățile individuale sau ale organizațiilor.

### Export în Formate Multiple:

Cererile completate pot fi exportate în mai multe formate, inclusiv PDF și DOCX, permițând utilizatorilor să trimită documentele atât în format electronic, cât și fizic, asigurându-se astfel că prezentarea documentului este consistentă indiferent de formatul ales.


## Exemple utilizare

1. **Funcționalitatea de Creare Automată a Cererilor**

   Exemplu de utilizare:
   Un student trebuie să solicite o scutire de la o anumită taxă universitară. Prin aplicație, el/ea selectează șablonul corespunzător cererii de scutire, completează datele personale și detalii despre motivul solicitării și aplicația generează automat cererea în formatul corespunzător.

2. **Funcționalitatea de Salvare și Încărcare a Profilurilor**

   Exemplu de utilizare:
   Maria este o studentă care a utilizat aplicația pentru a trimite o cerere de burse. Informațiile ei personale și istoricul cererilor sunt salvate. Când are nevoie să facă o nouă cerere, ea poate încărca rapid profilul salvat și să genereze o nouă cerere, economisind timp.

3. **Funcționalitatea de Editare și Personalizare a Șablonului**

   Exemplu de utilizare:
   Ion, președintele unei organizații studențești, are nevoie să redacteze o cerere oficială către rectorat pentru a organiza un eveniment. El poate să înceapă cu un șablon de bază și să adauge elemente specifice, cum ar fi sigla organizației, și să ajusteze formatul textului pentru a se alinia cu imaginea organizației sale.

4. **Funcționalitatea de Export în Formate Multiple**

   Exemplu de utilizare:
   Andreea are nevoie să trimită o cerere în format fizic și electronic. După ce și-a completat cererea în aplicație, ea poate să o exporte în PDF pentru a o imprima și în DOCX pentru a o trimite prin email, asigurându-se că formatul este păstrat corect în ambele cazuri.



### Resurse



