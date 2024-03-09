import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';

const CreatePost = () => {
  const { register } = useForm();
  return (
    <>
      Create Post
      <Box>
        <input {...register('image')} type="image" />
      </Box>
    </>
  );
};

export default CreatePost;
