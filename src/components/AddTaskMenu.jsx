import { useState } from 'react';

import { v4 as uuidv4 } from "uuid";

import { Box, FormControl, TextField, Button, Select, InputLabel, MenuItem, Typography } from '@mui/material';

import { MdOutlineAddTask } from "react-icons/md";

export const AddTaskMenu = ({ tasks, setTasks }) => {
    const [taskCategory, setTaskCategory] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleChangeCategory = (event) => {
        setTaskCategory(event.target.value);
    };

    const handleChangeTaskDescription = (event) => {
        setTaskDescription(event.target.value);
    };

    const createTask = () => {
        const id = uuidv4();
        const newTask = {
            taskDescription: taskDescription,
            taskCategory: taskCategory,
            finished: false,
            id: id,
        };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setTaskDescription('');
        setCategory('');
    };

    return (
        <Box sx={{ width: "90%", display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, alignItems: "center", borderRadius: 3, padding: 2, backdropFilter: 'blur(8px)', background: 'rgba(255, 255, 255, 0.1)' }} noValidate autoComplete="off">
            <TextField
                id="outlined-basic"
                label="Nueva tarea"
                variant="outlined"
                fullWidth
                value={taskDescription}
                onChange={handleChangeTaskDescription}
            />
            <FormControl fullWidth>
                <InputLabel id="category-select">Categoría</InputLabel>
                <Select
                    labelId="category-select-label"
                    id="category-select"
                    value={taskCategory}
                    label="Categoría"
                    onChange={handleChangeCategory}
                >
                    <MenuItem value={"Casa"}>Casa</MenuItem>
                    <MenuItem value={"Compras"}>Compras</MenuItem>
                    <MenuItem value={"Mascotas"}>Mascotas</MenuItem>
                    <MenuItem value={"Otro"}>Otro</MenuItem>
                    <MenuItem value={"Trabajo"}>Trabajo</MenuItem>
                </Select>
            </FormControl>
            <Button
                variant='contained'
                color='secondary'
                sx={{ ":hover": { backgroundColor: '#daa034' }, display: "flex", gap: 1, alignItems: 'center' }}
                onClick={createTask}
            >
                <MdOutlineAddTask />
                <Typography>
                    Añadir tarea
                </Typography>
            </Button>
        </Box>
    );
};
