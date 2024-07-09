import { Container } from '@mui/material';

import { AddTaskMenu } from './AddTaskMenu';
import { TaskContainer } from './TasksContainer';

export const MainContent = ({ tasks, setTasks }) => {
    return (
        <Container sx={{ display: "flex", alignItems: "center", flexDirection: "column", flex: 1, padding: 1, gap: 2 }}>
            <AddTaskMenu tasks={tasks} setTasks={setTasks} />
            <TaskContainer tasks={tasks} setTasks={setTasks} />
        </Container>
    );
};
