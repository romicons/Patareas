import { Typography, Box } from "@mui/material"

import PatareasIcon from "../assets/Patareas-Icon.svg"

export const Navbar = () => {
    return (
        <Box sx={ { display:"flex", justifyContent:"left", flexFlow: "row wrap", alignItems:"center", backgroundColor: "#18171c", width:'100%', paddingInline: 2,  boxShadow: 3 } }>
            <Box component="img" sx={{
                width: 35,
                height: 'auto', 
            }}
            alt="Patareas Logo"
            src={PatareasIcon}
            >        
            </Box>
            <Typography variant="h1" sx={{ fontSize:40}}>Patareas</Typography>
        </Box>
    )
}