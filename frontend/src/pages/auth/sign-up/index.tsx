import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Index = () => {
  const { register, handleSubmit } = useForm<{ email: string }>();

  const onSubmit = async (data: { email: string }) => {
    await axios
      .post('http://localhost:3000/post', data)
      .then((res) => console.log(res))
      .catch((err) => console.warn(err.message));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        placeholder="email"
        type="email"
        fullWidth
        {...register('email')}
        required
      ></TextField>
      <br />
      <Button variant="contained" color="primary" type="submit">
        Add User
      </Button>
    </form>
  );
};

export default Index;
