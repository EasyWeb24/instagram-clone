import { Box, Stack, Typography } from '@mui/material';

const Post = () => {
  return (
    <div>
      <Box
        mt={'12px'}
        bgcolor={'hsl(0, 0%, 100%);'}
        borderBottom={'1px solid hsl(0, 0%, 85%)'}
      >
        {' '}
        <Stack flexDirection={'row'} gap={'8px'} pb={'12px'}>
          <Typography
            color={'hsl(0, 0%, 15%);'}
            fontWeight={'500'}
            fontSize={'14px'}
          >
            John Doe
          </Typography>{' '}
          <Typography
            fontWeight={'400'}
            color={'hsl(0, 0%, 25%);'}
            fontSize={'14px'}
          >
            4h{' '}
          </Typography>
        </Stack>
        <img
          width={'100%'}
          height={'256px'}
          style={{ background: ' hsl(0, 0%, 95%)', borderRadius: '4px' }}
        />
        <Stack flexDirection={'row'} gap={'8px'} py={'12px'}>
          <Typography
            color={'hsl(0, 0%, 15%);'}
            fontWeight={'500'}
            fontSize={'14px'}
          >
            John Doe
          </Typography>{' '}
          <Typography
            fontWeight={'400'}
            color={'hsl(0, 0%, 25%);'}
            fontSize={'14px'}
          >
            Caption...{' '}
          </Typography>
        </Stack>
      </Box>
    </div>
  );
};

export default Post;
