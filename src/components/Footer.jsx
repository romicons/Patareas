import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { Button, Box, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <Box sx={{backgroundColor:"#18171c", display: "flex", flexDirection: "column", justifyContent: "center", paddingBlock: 1, width: "100%", boxShadow: 3}}>
            <Box sx={{display: "flex", flexDirection: "row", gap: 3, justifyContent: "center"}}>
                <Button href="https://github.com/romicons" sx={{ fontSize: {xs:25, sm:35}}}>
                    <FaGithub />
                </Button>
                <Button href="https://www.linkedin.com/in/romina-evelin-constantinoff/" sx={{ fontSize: {xs:25, sm:35}}}> 
                    <FaLinkedinIn />
                </Button>
                <Button href="mailto:romina.constantinoff@gmail.com" sx={{ fontSize: {xs:25, sm:35}}}>
                    <HiOutlineMail />
                </Button>
            </Box>
                <Typography variant="h2" sx= {{fontSize: {xs:20, sm:30}, textAlign: "center"}}> 
                    © Romina Constantinoff - 2024. Todos los derechos reservados. 
                </Typography>
        </Box>
    )
}