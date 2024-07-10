import { useState } from 'react';

import { TableCell, TableRow, Button, Modal, Box, TextField, Typography } from "@mui/material";

import { MdOutlineDelete, MdOutlineModeEdit, MdCheckCircle } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";

export const Task = ({ task, tasks, setTasks }) => {
  const { taskDescription, taskCategory, id, finished } = task;
  const [openEditModal, setOpenEditModal] = useState(false); 
  const [editedDescription, setEditedDescription] = useState(taskDescription); 
  const [descriptionError, setDescriptionError] = useState(false); 

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleDeleteTask = () => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    setOpenDeleteModal(false);
  };

  const handleEditTask = () => {
    setOpenEditModal(true); 
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const handleSaveEditedTask = () => {
    const trimmedDescription = editedDescription.trim();
    if (!trimmedDescription) {
      setDescriptionError(true); 
      return;
    }

    const capitalizedDescription = trimmedDescription.charAt(0).toUpperCase() + trimmedDescription.slice(1);

    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, taskDescription: capitalizedDescription } : task
    );
    setTasks(updatedTasks);
    setOpenEditModal(false); 
  };

  const handleCompleteTask = () => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, finished: !task.finished } : task
    );

    updatedTasks.sort((a, b) => {
      if (a.finished && !b.finished) return 1;
      if (!a.finished && b.finished) return -1; 
      return 0; 
    });

    setTasks(updatedTasks);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true); 
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false); 
  };

  return (
    <>
      <TableRow
        hover
        role="checkbox"
        tabIndex={-1}
        key={id}
        sx={{
          backgroundColor: finished ? '#f5f5f5' : 'inherit',
        }}
      >
        <TableCell align="left">{taskDescription}</TableCell>
        <TableCell align="center">{taskCategory}</TableCell>
        <TableCell align="right">
          <Button sx={{ color: '#cb000f' }} onClick={handleOpenDeleteModal}>
            <MdOutlineDelete />
          </Button>
          <Button sx={{ color: '#18171c' }} onClick={handleEditTask}>
            <MdOutlineModeEdit />
          </Button>
          <Button sx={{ color: finished ? '#808080' : '#00d812' }} onClick={handleCompleteTask}>
            <MdCheckCircle />
          </Button>
        </TableCell>
      </TableRow>

      <Modal
        open={openEditModal}
        onClose={handleCloseEditModal}
        aria-labelledby="edit-task-modal-title"
        aria-describedby="edit-task-modal-description"
      >
        <Box sx={style}>
          <Typography id="edit-task-modal-title" variant="h6" component="h2">
            Edita tu tarea
          </Typography>
          <TextField
            id="edit-task-description"
            label="Descripción"
            variant="outlined"
            fullWidth
            value={editedDescription}
            onChange={(e) => {
              setEditedDescription(e.target.value);
              setDescriptionError(false);
            }}
            sx={{ mt: 2 }}
            error={descriptionError}
            helperText={descriptionError ? 'La descripción no puede estar vacía' : ''}
            InputProps={{
              inputProps: {
                maxLength: 100,
              },
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2 }}>
            <Button onClick={handleSaveEditedTask} variant='contained' color='secondary' sx={{ display: 'flex', alignItems: 'center', gap: 1, ":hover": { backgroundColor: '#daa034' }, paddingInline: 2 }}>
              <MdCheckCircle />
              Guardar
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        aria-labelledby="delete-task-modal-title"
        aria-describedby="delete-task-modal-description"
      >
        <Box sx={style}>
        <Typography id="edit-task-modal-title" variant="h5" component="h2" sx={{color: '#cb000f', display: 'flex', alignItems: 'center', gap: 1}}>
            <FiAlertTriangle />
                Advertencia
          </Typography>
          <Typography id="delete-task-modal-title" variant="h6" component="h3">
            ¿Estás seguro de que deseas eliminar la tarea?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2 }}>
            <Button onClick={handleDeleteTask} variant='contained' color='error' sx={{ display: 'flex', alignItems: 'center', gap: 1, ":hover": { backgroundColor: '#daa034' }, paddingInline: 2 }}>
              <MdOutlineDelete />
              Confirmar
            </Button>
            <Button onClick={handleCloseDeleteModal} variant='outlined' color='primary' sx={{ ml: 2 }}>
              Cancelar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};
