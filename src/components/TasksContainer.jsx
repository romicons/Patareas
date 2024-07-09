import { useState, useEffect } from 'react';

import { Box, Button, FormControl, Typography } from '@mui/material';

import { TaskTable } from './TaskTable';

export const TaskContainer = ({ tasks, setTasks }) => {
  const [filter, setFilter] = useState('all');
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    filterTasks();
  }, [tasks, filter]);

  const filterTasks = () => {
    switch (filter) {
      case 'completed':
        setFilteredTasks(tasks.filter(task => task.finished));
        break;
      case 'incomplete':
        setFilteredTasks(tasks.filter(task => !task.finished));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  };

  const handleFilter = (type) => {
    setFilter(type);
  };

  return (
    <Box
      sx={{
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        borderRadius: 3,
        padding: 2,
        backdropFilter: 'blur(8px)',
        background: 'rgba(255, 255, 255, 0.1)',
      }}
    >
      <Typography variant='h2' sx={{ fontSize: { xs: 35, sm: 50 }, fontWeight: 'bold' }}>
        Lista de Tareas
      </Typography>
      <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row', gap: 1, justifyContent: 'center' }}>
        <Button
          variant='contained'
          color={filter === 'all' ? 'primary' : 'secondary'}
          onClick={() => handleFilter('all')}
          sx={{ ":hover": { backgroundColor: '#daa034' }, paddingInline: 2 }}
        >
          Todas
        </Button>
        <Button
          variant='contained'
          color={filter === 'completed' ? 'primary' : 'secondary'}
          onClick={() => handleFilter('completed')}
          sx={{ ":hover": { backgroundColor: '#daa034' }, paddingInline: 2 }}
        >
          Completas
        </Button>
        <Button
          variant='contained'
          color={filter === 'incomplete' ? 'primary' : 'secondary'}
          onClick={() => handleFilter('incomplete')}
          sx={{ ":hover": { backgroundColor: '#daa034' }, paddingInline: 2 }}
        >
          Incompletas
        </Button>
      </FormControl>
      <TaskTable tasks={filteredTasks} setTasks={setTasks} />
    </Box>
  );
};

