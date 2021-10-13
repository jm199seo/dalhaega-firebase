import { Box } from '@mui/material';
import React from 'react';
import Main from './components/Main';

function App() {
  return (
    <Box
      sx={{
        // backgroundColor: 'rgb(10, 25, 41)',
        backgroundColor: 'background.default',
        display: 'grid',
        gridTemplateColumns: 'minmax(min-content, 200px) 1fr 1fr 1fr',
        gap: 1,
        gridTemplateRows: '100px auto 100px',
        gridTemplateAreas: `"header header header header"
        "sidebar main main main"
        "footer footer footer footer"`,
      }}
      minHeight='100vh'
      minWidth='100vw'
    >
      <Box gridArea='header'>Header</Box>
      <Box gridArea='sidebar' sx={{ backgroundColor: 'info.main' }}>
        Sidebar
      </Box>
      <Box gridArea='main'>
        <Main />
      </Box>
      {/* <Button variant='contained'>haha</Button> */}
      <Box gridArea='footer'>Footer</Box>
    </Box>
  );
}

export default App;
