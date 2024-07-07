import { Box, Button, FormControl, Typography } from '@mui/material'

import { TaskTable } from './TaskTable'

export const TaskContainer = ({tasks, setTasks}) => {
    return(
        <Box sx={{width: "90%", display:"flex", flexDirection: "column", gap: 2, alignItems: "center", borderRadius: 3, padding: 2, backdropFilter: 'blur(8px)', background: 'rgba(255, 255, 255, 0.1)'}}>
            <Typography variant='h2' sx={{fontSize: {xs:35, sm:50}, fontWeight: 'bold'}}>
                Lista de Tareas
            </Typography>
            <FormControl fullWidth sx={{ display:'flex', flexDirection: 'row', gap: 1, justifyContent: 'center'}}>
                <Button variant='contained' color='secondary' sx={{":hover": {backgroundColor: '#daa034'}, paddingInline: 2}}>
                    Todas
                </Button>
                <Button variant='contained' color='secondary' sx={{":hover": {backgroundColor: '#daa034'}, paddingInline: 2}}>
                    Completas
                </Button>
                <Button variant='contained' color='secondary' sx={{":hover": {backgroundColor: '#daa034'}, paddingInline: 2}}>
                    Incompletas
                </Button>
            </FormControl>
            <TaskTable tasks={tasks} setTasks={setTasks}/>
        </Box>
    )
}