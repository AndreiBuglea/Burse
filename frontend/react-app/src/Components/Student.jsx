import { Button, Container, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Student() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [name, setName] = React.useState("");
  const [adress, setAdress] = React.useState("");
  const [students, setStudents] = React.useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, adress };

    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    })
      .then(() => {
        console.log("New Student added");
        toast.success("Thank you for registering!"); // Display success toast
      })
      .catch((error) => {
        console.error("Error adding student:", error);
        toast.error("Failed to register."); // Display error toast
      });
  };

  React.useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  });

  return (
    <Container>
      <ToastContainer />
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>
          <u>Add Student</u>
        </h1>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            "& > :not(style)": { marginBottom: "20px" }, // Adjust margin here
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Student Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Student Address"
            variant="outlined"
            onChange={(e) => setAdress(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={handleClick}>
            Submit
          </Button>
        </Box>
      </Paper>
      <Paper elevation={3} style={paperStyle}>
        {students.map((student) => (
          <Paper
            elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={student.id}
          >
            Id:{student.id}
            <br></br> Name:{student.name}
            <br /> Adress:{student.adress}
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}
