import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

const NewPost: React.FC = () => {
  const { register, handleSubmit } = useForm<{ body: string }>();

  const onSubmit = async (data: { body: string }) => {
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
      <TextField multiline {...register('body')} required></TextField>
      <br />
      <Button variant="contained" color="primary" type="submit">
        Post
      </Button>
    </form>
  );
};

export default NewPost;
