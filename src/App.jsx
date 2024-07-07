import { useState } from 'react'

import { getTasks, setTasks } from "./utils/localStorage";

import backgroundImage from './assets/liquid-cheese.svg'

import { GlobalStyles, Box } from '@mui/material'

import { Navbar } from './components/Navbar'
import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'

function App() {

    const [tasks, setTasks] = useState (getTasks() || []);


  return (
    <>
    <GlobalStyles
        styles={{
          '#root': {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        }}
      />
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexGrow: 1
        }}
      >
        <Navbar />
        <MainContent tasks={tasks} setTasks= {setTasks}/>
        <Footer />
      </Box>
    </>
  )
}

export default App