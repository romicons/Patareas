import { Container} from '@mui/material'

import { AddTaskMenu } from './AddTaskMenu'
import { TaskContainer } from './TasksContainer'

export const MainContent = () => {
    return (
        <Container sx={{ display: "flex", alignItems:"center", flexDirection: "column", flex: 1, padding: 2, gap: 2}}>
            <AddTaskMenu/>
            <TaskContainer/>
        </Container>
)
}