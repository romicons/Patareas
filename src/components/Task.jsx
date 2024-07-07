import { Box, Button, Typography, } from "@mui/material"

import { MdOutlineDelete, MdOutlineModeEdit, MdCheckCircle } from "react-icons/md";


export const Task = ({taskDescription, taskCategory, id, finished, tasks, setTasks}) => {

    const handleEditTask = (id) => {

    }

    const editTask = (id) => {
        const updatedTasks = tasks.map(task => task.id !== id);
        setTasks(updatedTasks);
    }

    return(
        <Box sx={{display: "flex", flexFlow: "row wrap", justifyContent: "space-between", padding: 1}}>
            <Typography>
                {taskDescription}
            </Typography>
            <Typography sx={{color: '#daa034', fontWeight: 'bold'}}>
                {taskCategory}
            </Typography>
            <Box>
                <Button sx={{color: '#cb000f'}}>
                    <MdOutlineDelete />
                </Button>
                <Button sx={{color: '#18171c'}}>
                    <MdOutlineModeEdit />
                </Button>
                <Button sx={{color: '#00d812'}}>
                    <MdCheckCircle />
                </Button>
            </Box>
        </Box>
    )
}