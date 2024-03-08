import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import universities from "../universities.json";

export default function FormularDetalii({ studentData, setStudentData }) {
  const an = [1, 2, 3, 4];
  useEffect(() => {
    setStudentData((prevData) => ({
      ...prevData,
      facultate: Object.keys(
        universities["Universitatea de Vest din Timisoara"]
      ),
      specializari: [],
    }));
  }, [setStudentData]);

  useEffect(() => {
    if (studentData.facultate) {
      const selectedSpecializations =
        universities["Universitatea de Vest din Timisoara"][
          studentData.facultate
        ] || [];
      setStudentData((prevData) => ({
        ...prevData,
        specializari: selectedSpecializations,
        specializare: "",
      }));
    }
  }, [studentData.facultate, setStudentData]);

  const handleChange = (prop) => (event) => {
    setStudentData({ ...studentData, [prop]: event.target.value });
  };

  return (
    <Paper
      elevation={3}
      style={{ padding: "20px", margin: "20px auto", maxWidth: "800px" }}
    >
      <FormControl fullWidth margin="normal">
        <InputLabel id="facultate-label">Facultate</InputLabel>
        <Select
          labelId="facultate-label"
          id="facultate"
          value={studentData.facultate || ""}
          label="Facultate"
          onChange={handleChange("facultate")}
          fullWidth
          margin="normal"
        >
          {Object.keys(universities["Universitatea de Vest din Timisoara"]).map(
            (facultate, index) => (
              <MenuItem key={index} value={facultate}>
                {facultate}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal" disabled={!studentData.facultate}>
        <InputLabel id="specializare-label">Specializare</InputLabel>
        <Select
          labelId="specializare-label"
          id="specializare"
          value={studentData.specializare || ""}
          label="Specializare"
          onChange={handleChange("specializare")}
          fullWidth
          margin="normal"
        >
          {studentData.specializari &&
            studentData.specializari.map((specializare, index) => (
              <MenuItem key={index} value={specializare}>
                {specializare}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      <TextField
        label="Anul de studiu"
        value={studentData.anulDeStudiu || ""}
        onChange={handleChange("anulDeStudiu")}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Număr Matricol"
        value={studentData.numarMatricol || ""}
        onChange={handleChange("numarMatricol")}
        fullWidth
        margin="normal"
      />
    </Paper>
  );
}
