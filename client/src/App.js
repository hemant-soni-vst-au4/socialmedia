import React, { useEffect } from 'react';
import './App.css';
import { getPosts } from './actions/posts'
import { Container, AppBar, Typography, Grow, Grid, Toolbar } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './style'
import { useDispatch } from 'react-redux'


function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts)
  }, [dispatch])

  return (
    <Container>
      <AppBar className={classes.appBar} position="fixed" color="primary">
        <Toolbar>
          <Typography className={classes.heading} variant="h4" align="center">
            Memories
          </Typography>
        </Toolbar>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={8}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
          
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
