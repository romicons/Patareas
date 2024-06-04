import * as React from 'react';

import { MdAddTask } from "react-icons/md";

import { Box, FormControl, TextField, Button, Select, InputLabel, MenuItem } from '@mui/material'

export const AddTaskMenu = () => {
    const [category, setCategory] = React.useState('');
  
    const handleChange = (event) => {
      setCategory(event.target.value);
    };

    return(
        <Box sx={{width: "85%", display:"flex", flexDirection: "column", gap: 2, alignItems: "center", borderRadius: 3, padding: 2, backdropFilter: 'blur(8px)', background: 'rgba(255, 255, 255, 0.1)'}} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Nueva tarea" variant="outlined" fullWidth />
                <FormControl fullWidth>
                    <InputLabel id="category-select">Categoría</InputLabel>
                    <Select
                        labelId="category-select-label"
                        id="category-select"
                        value={category}
                        label="Categoría"
                        onChange={handleChange}
                    >
                        <MenuItem value={"Casa"}>Casa</MenuItem>
                        <MenuItem value={"Compras"}>Compras</MenuItem>
                        <MenuItem value={"Mascotas"}>Mascotas</MenuItem>
                        <MenuItem value={"Otro"}>Otro</MenuItem>
                        <MenuItem value={"Trabajo"}>Trabajo</MenuItem>
                    </Select>
                </FormControl>
                <Button variant='contained' color='secondary' sx={{":hover": {backgroundColor: '#daa034'}, display: "flex", gap: 1, alignItems: 'center'  }}>
                    <MdAddTask />
                    Añadir tarea
                </Button>
        </Box>
    )
}