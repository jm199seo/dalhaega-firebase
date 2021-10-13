import { getFirestore } from '@firebase/firestore';
import { Box } from '@mui/material';
import Sidebar from 'components/Sidebar';
import MainRouter from 'pages/MainRouter';
import React from 'react';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <FirestoreProvider sdk={firestoreInstance}>
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
          <Sidebar />
        </Box>
        <Box gridArea='main'>
          <MainRouter />
        </Box>
        {/* <Button variant='contained'>haha</Button> */}
        <Box gridArea='footer'>Footer</Box>
      </Box>
    </FirestoreProvider>
  );
}

export default App;
