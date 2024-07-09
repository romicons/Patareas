import { TableCell, TableRow, Button, Typography } from "@mui/material";
import { MdOutlineDelete, MdOutlineModeEdit, MdCheckCircle } from "react-icons/md";

export const Task = ({ task, tasks, setTasks }) => {
  const { taskDescription, taskCategory, id, finished } = task;

  const handleDeleteTask = () => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleEditTask = () => {
    // Lógica para editar tarea
  };

  const handleCompleteTask = () => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, finished: !task.finished } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={id}>
      <TableCell>{taskDescription}</TableCell>
      <TableCell>{taskCategory}</TableCell>
      <TableCell align="center">
        <Button sx={{ color: '#cb000f' }} onClick={handleDeleteTask}>
          <MdOutlineDelete />
        </Button>
        <Button sx={{ color: '#18171c' }} onClick={handleEditTask}>
          <MdOutlineModeEdit />
        </Button>
        <Button sx={{ color: '#00d812' }} onClick={handleCompleteTask}>
          <MdCheckCircle />
        </Button>
      </TableCell>
    </TableRow>
  );
};
