import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

const CreatePost = () => {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <Typography>Create Post</Typography>
      <Box>
        <form
          onSubmit={handleSubmit(({ postImage, caption }) => {
            console.log({ postImage, caption });
          })}
        >
          <Grid container gap={{ xs: 2 }} marginTop={4} width={'100%'}>
            <Grid item width={'100%'}>
              <input {...register('postImage')} type="file" required />
            </Grid>
            <Grid item width={'100%'}>
              <TextField
                fullWidth
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
    </>
  );
};

export default CreatePost;
