import { Typography, Box } from "@mui/material"

import PatareasIcon from "../assets/Patareas-Icon.svg"

export const Navbar = () => {
    return (
        <Box sx={ { display:"flex", justifyContent:"left", flexFlow: "row wrap", alignItems:"center", backgroundColor: "#18171c", width:'100%', paddingInline: 2,  boxShadow: 3 } }>
            <Box component="img" sx={{
                width: { xs: 40, sm: 60},
                height: 'auto', 
            }}
            alt="Patareas Logo"
            src={PatareasIcon}
            >        
            </Box>
            <Typography variant="h1" sx={{fontSize: {xs:50, sm:70}}}>Patareas</Typography>
        </Box>
    )
}