import './App.css';
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js'
import useStyles from './styles'

import memories from './images/memories.png';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPost } from './actions/posts';

function App() {
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
        <img className={classes.image} src={memories} alt='memories' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xl={12} sm={7}>
              <Posts></Posts>
            </Grid>
            <Grid item xl={12} sm={4}>
              <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
