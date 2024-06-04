import { Container} from '@mui/material'

import { AddTaskMenu } from './AddTaskMenu'

export const MainContent = () => {
    return (
        <Container sx={{ display: "flex", justifyContent:"center", flex: 1, padding: 2}}>
            <AddTaskMenu/>
        </Container>
)
}