import { FormControl, MenuItem, Paper, Select, TextField } from "@mui/material";
import React from "react";

export default function FormularDatePersonale({ studentData, setStudentData }) {
  const criteriiBursa = [
    "Studenți orfani de unul sau ambii părinți",
    "Studenți care provin din familii monoparentale",
    "Studenți proveniți din casele de copii (centrele de plasament) sau plasament familial",
    "Studenți menționați la art. 17 alin. (1) punctul b) (cazuri medicale)",
    "Studenți care provin din familii al căror venituri lunare nete pe membru de familie sunt mai mici...",
    "Alte criterii...",
  ];

  // Handler for changes to each input
  const handleChange = (prop) => (event) => {
    setStudentData({ ...studentData, [prop]: event.target.value });
  };

  return (
    <Paper
      elevation={3}
      style={{ padding: "20px", margin: "20px auto", maxWidth: "800px" }}
    >
      <FormControl fullWidth margin="normal">
        <TextField
          label="Nume"
          value={studentData.nume || ""}
          onChange={handleChange("nume")}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Prenume"
          value={studentData.prenume || ""}
          onChange={handleChange("prenume")}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Telefon (format +40 700 000 000)"
          value={studentData.telefon || ""}
          onChange={handleChange("telefon")}
          fullWidth
          margin="normal"
          required
        />

        <FormControl fullWidth margin="normal">
          <Select
            labelId="criteriu-bursa-label"
            id="criteriu-bursa-select"
            value={studentData.criteriuBursa || ""}
            onChange={handleChange("criteriuBursa")}
            fullWidth
            margin="normal"
          >
            {criteriiBursa.map((criteriu, index) => (
              <MenuItem key={index} value={criteriu}>
                {criteriu}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FormControl>
    </Paper>
  );
}
