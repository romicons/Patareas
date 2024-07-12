import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { Box, FormControl, TextField, Button, Select, InputLabel, MenuItem, FormHelperText } from '@mui/material';
import { MdOutlineAddTask } from "react-icons/md";

export const AddTaskMenu = ({ tasks, setTasks }) => {
    const [taskCategory, setTaskCategory] = useState('');
    const [categoryError, setCategoryError] = useState(false);
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDescriptionError, setTaskDescriptionError] = useState(false);

    const handleChangeCategory = (event) => {
        setTaskCategory(event.target.value);
        if (event.target.value) {
            setCategoryError(false);
        }
    };

    const handleChangeTaskDescription = (event) => {
        setTaskDescription(event.target.value);
        if (event.target.value) {
            setTaskDescriptionError(false);
        }
    };

    const createTask = () => {
        if (!taskCategory) {
            setCategoryError(true);
            return;
        }

        const trimmedDescription = taskDescription.trim();
        if (!trimmedDescription) {
            setTaskDescriptionError(true);
            return;
        }

        const capitalizedDescription = trimmedDescription.charAt(0).toUpperCase() + trimmedDescription.slice(1);

        const id = uuidv4();
        const newTask = {
            taskDescription: capitalizedDescription,
            taskCategory: taskCategory,
            finished: false,
            id: id,
        };
        
        // Añadir la nueva tarea al inicio del array
        const updatedTasks = [newTask, ...tasks];
        setTasks(updatedTasks);
        setTaskDescription('');
        setTaskCategory('');
    };

    return (
        <Box
            sx={{
                width: "95%",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 2,
                alignItems: "center",
                borderRadius: 3,
                padding: 2,
                backdropFilter: 'blur(8px)',
                background: 'rgba(255, 255, 255, 0.1)'
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label="Nueva tarea"
                variant="outlined"
                fullWidth
                value={taskDescription}
                onChange={handleChangeTaskDescription}
                error={taskDescriptionError}
                helperText={taskDescriptionError ? "La descripción de la tarea no puede estar vacía." : ""}
            />
            <FormControl fullWidth error={categoryError}>
                <InputLabel id="category-select-label">Categoría</InputLabel>
                <Select
                    labelId="category-select-label"
                    id="category-select"
                    value={taskCategory}
                    label="Categoría"
                    onChange={handleChangeCategory}
                >
                    <MenuItem value={"Casa"}>Casa</MenuItem>
                    <MenuItem value={"Compras"}>Compras</MenuItem>
                    <MenuItem value={"Educación"}>Educación</MenuItem>
                    <MenuItem value={"Mascotas"}>Mascotas</MenuItem>
                    <MenuItem value={"Otro"}>Otro</MenuItem>
                    <MenuItem value={"Trabajo"}>Trabajo</MenuItem>
                </Select>
                {categoryError && (
                    <FormHelperText>
                        Debes elegir una categoría.
                    </FormHelperText>
                )}
            </FormControl>
            <Button
                variant='contained'
                color='secondary'
                sx={{ ":hover": { backgroundColor: '#daa034' }, display: "flex", gap: 1, alignItems: 'center', minWidth: 150, height: 55 }}
                onClick={createTask}
            >
                <MdOutlineAddTask />
                    Añadir tarea
            </Button>
        </Box>
    );
};
