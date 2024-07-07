import { Box, Typography } from "@mui/material";
import { Task } from "./Task";

export const TaskTable = ({ tasks, setTasks }) => {
    return (
        <Box sx={{ backgroundColor: '#e3f1ff', width: '90%', minHeight: 160, borderRadius: 2, boxShadow: 1 }}>
            {tasks?.length > 0 ? (
                tasks.map((task) => (
                    <Task key={task.id} taskDescription={task.taskDescription} taskCategory={task.taskCategory} finished={task.finished} />
                ))
            ) : (
                <Typography>No hay ninguna tarea aún.</Typography> 
            )}
        </Box>
    );
};
