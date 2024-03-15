import { Box, Button, Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../../state';

const Index = () => {
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();
  const dispatch = useDispatch();

  const onSubmit = async (data: { email: string; password: string }) => {
    await axios('http://localhost:3000/auth/register', {
      method: 'POST',
      data,
    })
      .then((res) => {
        dispatch(setLogin({ ...res.data }));
      })
      .catch((err) => console.warn(err.message));
  };
  return (
    <Box p={2}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container gap={2}>
          <Grid item width={'100%'}>
            <TextField
              placeholder="johhdoe@gmail.com"
              label="Email"
              type="email"
              fullWidth
              {...register('email')}
              required
            ></TextField>
          </Grid>
          <Grid item width={'100%'}>
            <TextField
              placeholder="eg. password%John321"
              type="password"
              label="Password"
              fullWidth
              {...register('password')}
              required
            ></TextField>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Button variant="contained" color="primary" type="submit">
            Sign Up{' '}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Index;
