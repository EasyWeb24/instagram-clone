import { Box } from '@mui/material';
import NewPost from '../../components/NewPost';
import AllPosts from '../../components/AllPosts';

const Index = () => {
  return (
    <Box px={'48px'} py={'96px'}>
      <NewPost />
      <AllPosts />
    </Box>
  );
};

export default Index;
