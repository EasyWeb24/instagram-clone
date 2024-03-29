import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const CreatePost = () => {
  const { register, handleSubmit } = useForm();
  return (
    <Box p={2} py={4}>
      <Typography>Create Post</Typography>
      <Box borderTop={'1px solid hsl(0, 0%, 85%)'}>
        <form
          onSubmit={handleSubmit((data) => {
            console.log({ ...data, postImage: data.postImage[0] });
            axios('http://localhost:3000/post', {
              method: 'POST',
              data: { ...data, postImage: data.postImage[0] },
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
              .then(console.log)
              .catch(console.warn);
          })}
        >
          <Grid container gap={{ xs: 2 }} marginTop={3} width={'100%'}>
            <Grid item width={'100%'}>
              <input {...register('postImage')} type="file" required />
            </Grid>
            <Grid item width={'100%'}>
              <TextField
                fullWidth
                autoComplete="off"
                placeholder="Caption..."
                {...register('caption')}
                type="text"
                required
              />
            </Grid>
          </Grid>
          <Box mt={3}>
            <Button variant="contained" type="submit">
              Post
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreatePost;
