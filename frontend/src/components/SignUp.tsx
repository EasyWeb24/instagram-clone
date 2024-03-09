import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

const SignUp: React.FC = () => {
  const { register, handleSubmit } = useForm<{ email: string }>();

  const onSubmit = async (data: { email: string }) => {
    const response = await fetch('http://localhost:3000/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log(response.json());
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField multiline {...register('email')} required></TextField>
      <br />
      <Button variant="contained" color="primary" type="submit">
        Add User
      </Button>
    </form>
  );
};

export default SignUp;
