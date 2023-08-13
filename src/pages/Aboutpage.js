import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Aboutpage = () => {
  return (
    <Box className="about" sx={{ padding: 2 }}>
      <Typography variant="h3" className="about__title">
        ABOUT PAGE
      </Typography>
      <Container maxWidth="sm">
        <Box className="about__info" sx={{ marginTop: 2 }}>
          <Typography variant="body1">
            Tv Show Search App is a simple and intuitive application that allows you to search for your favorite TV shows. You can explore information about different TV shows, including their details and episodes. The app leverages modern web technologies and APIs to provide an enjoyable user experience.
          </Typography>
          <div>
            <Typography variant="body1">Things implemented:</Typography>
            <List>
              <ListItem>
                <ListItemText primary="React (create-react-app)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="MUI CSS & HTML" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Axios AJAX Request" />
              </ListItem>
              <ListItem>
                <ListItemText primary="TVMAZE API (https://www.tvmaze.com/api)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="React Router" />
              </ListItem>
              <ListItem>
                <ListItemText primary="React Context API" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Deploying to Netlify" />
              </ListItem>
            </List>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Aboutpage;
