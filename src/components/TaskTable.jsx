import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { Task } from './Task';

const columns = [
  { id: 'description', label: 'DESCRIPCIÓN', align: 'left' },
  { id: 'category', label: 'CATEGORÍA', align: 'center' },
  { id: 'actions', label: 'ACCIONES',  align: 'right'}
];

export const TaskTable = ({ tasks, setTasks }) => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{ fontWeight: 'bold', width: '33%', backgroundColor: '#18171c', color: '#daa034' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No existen tareas aún.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
